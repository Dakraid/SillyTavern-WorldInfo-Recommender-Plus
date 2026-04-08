import { XMLParser, XMLValidator } from 'fast-xml-parser';
import type { WIEntry } from 'sillytavern-utils-lib/types/world-info';
import type { ResponseFormat } from './settings.js';
import { EXTENDED_WI_ENTRY_FIELDS, WI_ENTRY_DEFAULTS } from './types/wi-entry-extended.js';

const xmlParser = new XMLParser({
  ignoreAttributes: true,
  textNodeName: '#text',
  trimValues: true,
  allowBooleanAttributes: true,
});

function createRandomNumber(length: number): number {
  return Math.floor(Math.random() * Math.pow(10, length));
}

export interface ParseOptions {
  schema?: any;
  previousContent?: string;
}

function ensureArray(data: any, schema: any) {
  if (!schema || !data || !schema.properties) {
    return;
  }

  for (const key in schema.properties) {
    if (!data.hasOwnProperty(key)) continue;

    const propSchema = schema.properties[key];
    let propData = data[key];

    // Ensure the property is an array if the schema requires it and it's not one already.
    if (propSchema.type === 'array' && !Array.isArray(propData)) {
      // Handle empty XML tags which are parsed as empty strings
      if (propData === '' || propData === null) {
        propData = [];
      } else {
        propData = [propData];
      }
      data[key] = propData;
    }

    // Attempt to unwrap "wrapped" array items often produced by LLMs in XML
    // e.g. <add><item><name>...</name></item></add> becomes { add: [{ item: { name: ... } }] }
    // We want { add: [{ name: ... }] }
    if (propSchema.type === 'array' && propSchema.items?.type === 'object' && Array.isArray(propData)) {
      const requiredKeys = propSchema.items.required || [];
      const propertyKeys = propSchema.items.properties ? Object.keys(propSchema.items.properties) : [];
      // Heuristic: check for keys that should exist on the item
      const keysToCheck = requiredKeys.length > 0 ? requiredKeys : propertyKeys;

      if (keysToCheck.length > 0) {
        const unwrappedData: any[] = [];
        let modified = false;

        for (const element of propData) {
          const isMatch = (obj: any) => {
            if (typeof obj !== 'object' || obj === null) return false;
            // Check if it has at least one of the keys we are looking for
            return keysToCheck.some((k: string) => Object.prototype.hasOwnProperty.call(obj, k));
          };

          if (isMatch(element)) {
            unwrappedData.push(element);
          } else {
            // Look for a child that matches
            let foundChild = false;
            if (typeof element === 'object' && element !== null) {
              for (const childKey in element) {
                const childVal = element[childKey];
                if (isMatch(childVal)) {
                  unwrappedData.push(childVal);
                  foundChild = true;
                  modified = true;
                  break;
                }
                // Handle nested array grouping: { item: [ ... ] }
                if (Array.isArray(childVal) && childVal.length > 0 && isMatch(childVal[0])) {
                  unwrappedData.push(...childVal);
                  foundChild = true;
                  modified = true;
                  break;
                }
              }
            }

            if (!foundChild) {
              unwrappedData.push(element);
            }
          }
        }

        if (modified) {
          propData = unwrappedData;
          data[key] = propData;
        }
      }
    }

    // Recurse into objects or arrays of objects.
    if (propSchema.type === 'object' && typeof propData === 'object' && propData !== null) {
      ensureArray(propData, propSchema);
    } else if (propSchema.type === 'array' && propSchema.items?.type === 'object' && Array.isArray(propData)) {
      propData.forEach((item) => ensureArray(item, propSchema.items));
    }

    // Coerce types to match schema, for both single properties and items within an array.
    if (propSchema.type === 'string' && typeof propData !== 'string') {
      data[key] = String(propData);
    } else if (propSchema.type === 'array' && propSchema.items?.type === 'string' && Array.isArray(propData)) {
      data[key] = propData.map(String);
    }
  }
}

const CONTENT_OPEN_TAG = '<content>';
const CONTENT_CLOSE_TAG = '</content>';
const CDATA_OPEN_TAG = '<![CDATA[';

function decodeXmlEntities(value: string): string {
  return value.replace(/&(#x?[0-9a-fA-F]+|amp|lt|gt|quot|apos);/g, (entity, token: string) => {
    switch (token) {
      case 'amp':
        return '&';
      case 'lt':
        return '<';
      case 'gt':
        return '>';
      case 'quot':
        return '"';
      case 'apos':
        return "'";
      default:
        if (!token.startsWith('#')) {
          return entity;
        }

        const isHex = token[1]?.toLowerCase() === 'x';
        const codePoint = Number.parseInt(token.slice(isHex ? 2 : 1), isHex ? 16 : 10);
        if (!Number.isFinite(codePoint)) {
          return entity;
        }

        try {
          return String.fromCodePoint(codePoint);
        } catch {
          return entity;
        }
    }
  });
}

function escapeCdataTerminator(value: string): string {
  return value.replace(/\]\]>/g, ']]]]><![CDATA[>');
}

function startsWithCdata(value: string): boolean {
  return value.trimStart().startsWith(CDATA_OPEN_TAG);
}

/**
 * Wraps the inner text of <content>...</content> tags in CDATA sections,
 * so XML-like markup inside lorebook content stays plain text during parsing.
 * Also handles an unclosed trailing <content> tag in continuation mode.
 */
function escapeContentTags(xml: string): string {
  let escapedXml = '';
  let searchIndex = 0;

  while (true) {
    const openTagIndex = xml.indexOf(CONTENT_OPEN_TAG, searchIndex);
    if (openTagIndex === -1) {
      return escapedXml + xml.slice(searchIndex);
    }

    escapedXml += xml.slice(searchIndex, openTagIndex);
    const contentStartIndex = openTagIndex + CONTENT_OPEN_TAG.length;
    const closeTagIndex = xml.indexOf(CONTENT_CLOSE_TAG, contentStartIndex);

    if (closeTagIndex === -1) {
      const trailingContent = xml.slice(contentStartIndex);
      if (startsWithCdata(trailingContent)) {
        return escapedXml + xml.slice(openTagIndex);
      }

      return `${escapedXml}${CONTENT_OPEN_TAG}${CDATA_OPEN_TAG}${escapeCdataTerminator(decodeXmlEntities(trailingContent))}`;
    }

    const innerContent = xml.slice(contentStartIndex, closeTagIndex);
    if (startsWithCdata(innerContent)) {
      escapedXml += xml.slice(openTagIndex, closeTagIndex + CONTENT_CLOSE_TAG.length);
    } else {
      const escapedContent = escapeCdataTerminator(decodeXmlEntities(innerContent.trim()));
      escapedXml += `${CONTENT_OPEN_TAG}${CDATA_OPEN_TAG}${escapedContent}]]>${CONTENT_CLOSE_TAG}`;
    }

    searchIndex = closeTagIndex + CONTENT_CLOSE_TAG.length;
  }
}

export function parseResponse(
  content: string,
  format: 'xml' | 'json' | 'none',
  options: ParseOptions = {},
): object | string {
  const codeBlockRegex = /```(?:\w+\n|\n)?([\s\S]*?)```/;
  const codeBlockMatch = content.match(codeBlockRegex);
  let cleanedContent = codeBlockMatch ? codeBlockMatch[1].trim() : content.trim();
  const { previousContent } = options;

  if (previousContent) {
    cleanedContent = previousContent + cleanedContent.trimEnd();
  }

  const contentToParse = format === 'xml' ? escapeContentTags(cleanedContent) : cleanedContent;

  try {
    switch (format) {
      case 'xml':
        const validationResult = XMLValidator.validate(contentToParse);
        if (validationResult !== true) {
          throw new Error(`Model response is not valid XML: ${validationResult.err.msg}`);
        }
        let parsedXml = xmlParser.parse(contentToParse);
        if (parsedXml.root) {
          parsedXml = parsedXml.root;
        }
        if (options.schema) {
          ensureArray(parsedXml, options.schema);
        }
        return parsedXml;
      case 'json':
        const parsedJson = JSON.parse(cleanedContent);
        return parsedJson;
      case 'none':
        return cleanedContent;

      default:
        throw new Error(`Unsupported format specified: ${format}`);
    }
  } catch (error: any) {
    console.error(`Error parsing response in format '${format}':`, error);
    console.error('Raw content received:', content);

    if (format === 'xml') {
      if (error.message.startsWith('Model response is not valid XML:')) {
        throw error;
      }
      throw new Error(`Model response is not valid XML: ${error.message}`);
    }
    if (format === 'json') {
      throw new Error('Model response is not valid JSON.');
    }
    throw new Error(`Failed to parse response as ${format}: ${error.message}`);
  }
}

/**
 * Gets the prefilled incomplete message for continuing generation.
 * Intentionally includes only identity and core content fields to keep continuation prompts compact.
 * @param worldName The lorebook world name
 * @param entry The entry being continued
 * @param format The expected format ('xml', 'json', 'none')
 * @returns Prefilled incomplete message in the specified format
 */
export function getPrefilled(worldName: string, entry: WIEntry, format: 'xml' | 'json' | 'none'): string {
  switch (format) {
    case 'xml':
      return `
<lorebooks>
  <entry>
    <worldName>${worldName}</worldName>
    <id>${entry.uid}</id>
    <name>${entry.comment}</name>
    <triggers>${entry.key.join(',')}</triggers>
    <content>${entry.content}`;
    case 'json':
      return JSON.stringify(
        {
          lorebooks: {
            entry: {
              worldName: worldName,
              id: entry.uid,
              name: entry.comment,
              triggers: entry.key,
              content: entry.content,
            },
          },
        },
        null,
        2,
      ).slice(0, -2); // Remove the last two characters to make it incomplete
    case 'none':
      return entry.content;
    default:
      throw new Error(`Unsupported format specified: ${format}`);
  }
}

function getNonDefaultFields(entry: WIEntry): Partial<WIEntry> {
  const result: Partial<WIEntry> = {};

  for (const field of EXTENDED_WI_ENTRY_FIELDS) {
    const value = entry[field];
    const defaultValue = WI_ENTRY_DEFAULTS[field];

    if (value !== undefined && value !== null && value !== defaultValue) {
      (result as Record<string, unknown>)[field] = value;
    }
  }

  return result;
}

function parseLorebookEntryId(id: string | number | undefined): number {
  if (id === undefined) {
    return createRandomNumber(6);
  }

  if (typeof id === 'number') {
    return id;
  }

  const trimmedId = id.trim();
  if (!trimmedId) {
    throw new Error('Lorebook entry id must not be empty.');
  }

  const parsedId = Number(trimmedId);
  if (Number.isFinite(parsedId)) {
    return parsedId;
  }

  throw new Error(`Lorebook entry id must be numeric. Received: ${id}`);
}

export function getFull(worldName: string, entry: WIEntry, format: 'xml' | 'json' | 'none'): string {
  const extraFields = getNonDefaultFields(entry);

  switch (format) {
    case 'xml':
      const extraFieldTags = Object.entries(extraFields)
        .map(([field, value]) => `    <${field}>${String(value)}</${field}>`)
        .join('\n');

      return `
<lorebooks>
  <entry>
    <worldName>${worldName}</worldName>
    <id>${entry.uid}</id>
    <name>${entry.comment}</name>
    <triggers>${entry.key.join(',')}</triggers>
    <content>${entry.content}</content>${extraFieldTags ? `\n${extraFieldTags}` : ''}
  </entry>
</lorebooks>`;
    case 'json':
      return JSON.stringify(
        {
          lorebooks: {
            entry: {
              worldName: worldName,
              id: entry.uid,
              name: entry.comment,
              triggers: entry.key,
              content: entry.content,
              ...extraFields,
            },
          },
        },
        null,
        2,
      );
    case 'none':
      return entry.content;
    default:
      throw new Error(`Unsupported format specified: ${format}`);
  }
}

export interface ParseLorebookOptions {
  previousContent?: string;
}

interface ParsedLorebookEntry {
  worldName?: string;
  id?: string | number;
  triggers?: string[] | string;
  content?: string;
  name?: string;
  order?: number;
  position?: number;
  depth?: number;
  role?: number;
  selective?: boolean;
  selectiveLogic?: number;
  constant?: boolean;
  probability?: number;
  useProbability?: boolean;
  group?: string;
  groupWeight?: number;
  groupOverride?: boolean;
  excludeRecursion?: boolean;
  preventRecursion?: boolean;
  delayUntilRecursion?: number;
  scanDepth?: number | null;
  caseSensitive?: boolean | null;
  matchWholeWords?: boolean | null;
  sticky?: number | null;
  cooldown?: number | null;
  delay?: number | null;
  addMemo?: boolean;
  matchPersonaDescription?: boolean;
  matchCharacterDescription?: boolean;
  outletName?: string;
}

interface ParsedLorebookResponse {
  lorebooks?: {
    entry?: ParsedLorebookEntry | ParsedLorebookEntry[];
  };
}

export function parseLorebookResponse(
  content: string,
  format: ResponseFormat,
  options: ParseLorebookOptions = {},
): Record<string, WIEntry[]> {
  if (!content?.trim()) {
    return {};
  }

  try {
    const parsed = parseResponse(content, format, {
      previousContent: options.previousContent,
    }) as ParsedLorebookResponse;
    const lorebooks = parsed.lorebooks;

    if (!lorebooks) {
      return {};
    }

    let entries = lorebooks.entry;
    if (!entries) {
      return {};
    }

    if (!Array.isArray(entries)) {
      entries = [entries];
    }

    const entriesByWorldName: Record<string, WIEntry[]> = {};

    for (const entry of entries) {
      const worldName = entry.worldName;
      if (!worldName) {
        continue;
      }

      if (!entriesByWorldName[worldName]) {
        entriesByWorldName[worldName] = [];
      }

      let triggers: string[];
      if (Array.isArray(entry.triggers)) {
        triggers = entry.triggers;
      } else if (typeof entry.triggers === 'string') {
        triggers = entry.triggers
          .split(',')
          .map((trigger: string) => trigger.trim())
          .filter(Boolean);
      } else {
        triggers = [];
      }

      const parsedEntry: WIEntry = {
        ...WI_ENTRY_DEFAULTS,
        uid: parseLorebookEntryId(entry.id),
        key: triggers,
        content: entry.content ?? '',
        comment: entry.name ?? '',
        disable: false,
        keysecondary: [],
      };

      for (const field of EXTENDED_WI_ENTRY_FIELDS) {
        const value = entry[field as keyof ParsedLorebookEntry];
        if (value !== undefined) {
          (parsedEntry as unknown as Record<string, unknown>)[field] = value;
        }
      }

      entriesByWorldName[worldName].push(parsedEntry);
    }

    return entriesByWorldName;
  } catch (error) {
    throw error;
  }
}
