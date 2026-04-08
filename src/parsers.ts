import { XMLParser, XMLValidator } from 'fast-xml-parser';
import type { WIEntry } from 'sillytavern-utils-lib/types/world-info';
import type { ResponseFormat } from './settings.js';

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

  try {
    switch (format) {
      case 'xml':
        const validationResult = XMLValidator.validate(cleanedContent);
        if (validationResult !== true) {
          throw new Error(`Model response is not valid XML: ${validationResult.err.msg}`);
        }
        let parsedXml = xmlParser.parse(cleanedContent);
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
 * Gets the prefilled incomplete message for continuing generation
 * @param content The current content to continue from
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

export function getFull(worldName: string, entry: WIEntry, format: 'xml' | 'json' | 'none'): string {
  switch (format) {
    case 'xml':
      return `
<lorebooks>
  <entry>
    <worldName>${worldName}</worldName>
    <id>${entry.uid}</id>
    <name>${entry.comment}</name>
    <triggers>${entry.key.join(',')}</triggers>
    <content>${entry.content}</content>
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
  id?: number;
  triggers?: string[] | string;
  content?: string;
  name?: string;
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

      entriesByWorldName[worldName].push({
        uid: entry.id ?? createRandomNumber(6),
        key: triggers,
        content: entry.content ?? '',
        comment: entry.name ?? '',
        disable: false,
        keysecondary: [],
      });
    }

    return entriesByWorldName;
  } catch (error) {
    throw error;
  }
}
