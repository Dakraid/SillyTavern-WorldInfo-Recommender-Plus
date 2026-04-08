import { afterEach, beforeEach, describe, expect, it, test, vi } from 'vitest';
import type { WIEntry } from 'sillytavern-utils-lib/types/world-info';
import { getFull, getPrefilled, parseLorebookResponse, parseResponse } from '../parsers.js';

const mockSchema = {
  type: 'object',
  properties: {
    justification: { type: 'string' },
    add: {
      type: 'array',
      items: {
        type: 'object',
        required: ['worldName', 'name'],
        properties: {
          worldName: { type: 'string' },
          name: { type: 'string' },
          triggers: { type: 'array', items: { type: 'string' } },
          content: { type: 'string' },
        },
      },
    },
    remove: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          worldName: { type: 'string' },
          name: { type: 'string' },
        },
      },
    },
    // Simple array of strings for testing simpler structures
    keywords: {
      type: 'array',
      items: { type: 'string' },
    },
  },
};

describe('parseResponse', () => {
  describe('JSON format', () => {
    test('parses simple JSON object', () => {
      const input = '{"key": "value"}';
      const result = parseResponse(input, 'json');
      expect(result).toEqual({ key: 'value' });
    });

    test('parses JSON inside markdown code blocks', () => {
      const input = 'Here is the data:\n```json\n{"key": "value"}\n```';
      const result = parseResponse(input, 'json');
      expect(result).toEqual({ key: 'value' });
    });

    test('throws error on invalid JSON', () => {
      const input = '{"key": "value"'; // Missing closing brace
      expect(() => parseResponse(input, 'json')).toThrow();
    });
  });

  describe('XML format with Schema Enforcement', () => {
    test('parses simple XML', () => {
      const input = '<root><justification>Test</justification></root>';
      const result = parseResponse(input, 'xml', { schema: mockSchema }) as any;
      expect(result.justification).toBe('Test');
    });

    test('handles empty self-closing tags for arrays (fixes empty string bug)', () => {
      // LLM often outputs <add/> or <keywords/> which parses to "" instead of []
      const input = `
        <root>
          <justification>None</justification>
          <add/>
          <keywords/>
        </root>
      `;

      const result = parseResponse(input, 'xml', { schema: mockSchema }) as any;

      expect(Array.isArray(result.add)).toBe(true);
      expect(result.add).toHaveLength(0);

      expect(Array.isArray(result.keywords)).toBe(true);
      expect(result.keywords).toHaveLength(0);
    });

    test('unwraps incorrectly nested "item" tags (fixes wrapping bug)', () => {
      // LLM output: <add><item><worldName>...</worldName>...</item></add>
      // Schema expects: add: [{ worldName: ... }]
      const input = `
        <root>
          <add>
            <item>
              <worldName>Earth</worldName>
              <name>Entry1</name>
              <content>Content1</content>
            </item>
          </add>
        </root>
      `;

      const result = parseResponse(input, 'xml', { schema: mockSchema }) as any;

      expect(Array.isArray(result.add)).toBe(true);
      expect(result.add).toHaveLength(1);
      // It should have stripped the "item" wrapper
      expect(result.add[0]).toHaveProperty('worldName', 'Earth');
      expect(result.add[0]).not.toHaveProperty('item');
    });

    test('unwraps multiple incorrectly nested items', () => {
      const input = `
        <root>
          <add>
            <item>
              <worldName>W1</worldName>
              <name>N1</name>
            </item>
            <item>
              <worldName>W2</worldName>
              <name>N2</name>
            </item>
          </add>
        </root>
      `;

      const result = parseResponse(input, 'xml', { schema: mockSchema }) as any;

      expect(result.add).toHaveLength(2);
      expect(result.add[0].name).toBe('N1');
      expect(result.add[1].name).toBe('N2');
    });

    test('handles mixed correctly and incorrectly formatted fields', () => {
      // <add> is wrapped in <item>, <remove> is correct
      const input = `
        <root>
          <add>
            <item>
              <worldName>W1</worldName>
              <name>N1</name>
            </item>
          </add>
          <remove>
            <worldName>W2</worldName>
            <name>N2</name>
          </remove>
        </root>
      `;

      const result = parseResponse(input, 'xml', { schema: mockSchema }) as any;

      // Add should be unwrapped
      expect(result.add[0].worldName).toBe('W1');

      // Remove should be coerced to array normally
      expect(result.remove[0].worldName).toBe('W2');
    });

    test('coerces single object to array', () => {
      const input = `
        <root>
          <add>
            <worldName>W1</worldName>
            <name>N1</name>
          </add>
        </root>
      `;
      const result = parseResponse(input, 'xml', { schema: mockSchema }) as any;
      expect(Array.isArray(result.add)).toBe(true);
      expect(result.add[0].name).toBe('N1');
    });
  });
});

describe('parseLorebookResponse', () => {
  beforeEach(() => {
    vi.spyOn(console, 'error').mockImplementation(() => undefined);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  const xmlSingleEntry = `
<lorebooks>
    <entry>
        <worldName>Fantasy World</worldName>
        <id>12345</id>
        <name>Dragon Lore</name>
        <triggers>dragon,wyrm,drake</triggers>
        <content>Dragons are ancient creatures of immense power.</content>
    </entry>
</lorebooks>`;

  const jsonSingleEntry = `
{
    "lorebooks": {
        "entry": {
            "worldName": "Fantasy World",
            "id": 12345,
            "name": "Dragon Lore",
            "triggers": ["dragon", "wyrm", "drake"],
            "content": "Dragons are ancient creatures of immense power."
        }
    }
}`;

  const baseEntry: WIEntry = {
    uid: 123456,
    key: ['dragon', 'wyrm'],
    keysecondary: [],
    content: 'Dragons are ancient creatures of immense power.',
    comment: 'Dragon Lore',
    disable: false,
  };

  it('parses valid XML with a single entry', () => {
    expect(parseLorebookResponse(xmlSingleEntry, 'xml')).toEqual({
      'Fantasy World': [
        {
          uid: 12345,
          key: ['dragon', 'wyrm', 'drake'],
          content: 'Dragons are ancient creatures of immense power.',
          comment: 'Dragon Lore',
          disable: false,
          keysecondary: [],
        },
      ],
    });
  });

  it('parses valid XML with multiple entries and groups them by worldName', () => {
    const content = `
<lorebooks>
  <entry>
    <worldName>Fantasy World</worldName>
    <name>Dragon Lore</name>
    <triggers>dragon,wyrm</triggers>
    <content>Dragons are ancient creatures.</content>
  </entry>
  <entry>
    <worldName>Fantasy World</worldName>
    <name>Phoenix Lore</name>
    <triggers>phoenix,rebirth</triggers>
    <content>Phoenixes are reborn from ash.</content>
  </entry>
  <entry>
    <worldName>SciFi World</worldName>
    <name>Quantum Drive</name>
    <triggers>quantum,drive,ftl</triggers>
    <content>The quantum drive enables faster-than-light travel.</content>
  </entry>
</lorebooks>`;

    const result = parseLorebookResponse(content, 'xml');

    expect(result['Fantasy World']).toHaveLength(2);
    expect(result['Fantasy World'][0].comment).toBe('Dragon Lore');
    expect(result['Fantasy World'][1].comment).toBe('Phoenix Lore');
    expect(result['SciFi World']).toEqual([
      {
        uid: expect.any(Number),
        key: ['quantum', 'drive', 'ftl'],
        content: 'The quantum drive enables faster-than-light travel.',
        comment: 'Quantum Drive',
        disable: false,
        keysecondary: [],
      },
    ]);
  });

  it('skips XML entries without worldName', () => {
    const content = `
<lorebooks>
  <entry>
    <name>Nameless World Entry</name>
    <triggers>dragon</triggers>
    <content>Should be skipped.</content>
  </entry>
  <entry>
    <worldName>Fantasy World</worldName>
    <name>Dragon Lore</name>
    <triggers>dragon</triggers>
    <content>Should remain.</content>
  </entry>
</lorebooks>`;

    expect(parseLorebookResponse(content, 'xml')).toEqual({
      'Fantasy World': [
        {
          uid: expect.any(Number),
          key: ['dragon'],
          content: 'Should remain.',
          comment: 'Dragon Lore',
          disable: false,
          keysecondary: [],
        },
      ],
    });
  });

  it('parses valid JSON with a single entry', () => {
    expect(parseLorebookResponse(jsonSingleEntry, 'json')).toEqual({
      'Fantasy World': [
        {
          uid: 12345,
          key: ['dragon', 'wyrm', 'drake'],
          content: 'Dragons are ancient creatures of immense power.',
          comment: 'Dragon Lore',
          disable: false,
          keysecondary: [],
        },
      ],
    });
  });

  it('parses valid JSON with multiple entries and groups them by worldName', () => {
    const content = `
{
  "lorebooks": {
    "entry": [
      {
        "worldName": "Fantasy World",
        "name": "Dragon Lore",
        "triggers": ["dragon", "wyrm"],
        "content": "Dragons are ancient creatures."
      },
      {
        "worldName": "Fantasy World",
        "name": "Phoenix Lore",
        "triggers": ["phoenix", "rebirth"],
        "content": "Phoenixes are reborn from ash."
      },
      {
        "worldName": "SciFi World",
        "name": "Quantum Drive",
        "triggers": ["quantum", "drive", "ftl"],
        "content": "The quantum drive enables faster-than-light travel."
      }
    ]
  }
}`;

    const result = parseLorebookResponse(content, 'json');

    expect(result['Fantasy World']).toHaveLength(2);
    expect(result['Fantasy World'][0].key).toEqual(['dragon', 'wyrm']);
    expect(result['Fantasy World'][1].comment).toBe('Phoenix Lore');
    expect(result['SciFi World'][0].key).toEqual(['quantum', 'drive', 'ftl']);
  });

  it('skips JSON entries without worldName', () => {
    const content = `
{
  "lorebooks": {
    "entry": [
      {
        "name": "Nameless World Entry",
        "triggers": ["dragon"],
        "content": "Should be skipped."
      },
      {
        "worldName": "Fantasy World",
        "name": "Dragon Lore",
        "triggers": ["dragon"],
        "content": "Should remain."
      }
    ]
  }
}`;

    expect(parseLorebookResponse(content, 'json')).toEqual({
      'Fantasy World': [
        {
          uid: expect.any(Number),
          key: ['dragon'],
          content: 'Should remain.',
          comment: 'Dragon Lore',
          disable: false,
          keysecondary: [],
        },
      ],
    });
  });

  it('parses XML wrapped in an xml code block', () => {
    const content = `Here is the response:\n\n\
\`\`\`xml
${xmlSingleEntry.trim()}
\`\`\``;

    expect(parseLorebookResponse(content, 'xml')).toEqual(parseLorebookResponse(xmlSingleEntry, 'xml'));
  });

  it('parses JSON wrapped in a json code block', () => {
    const content = `Here is the response:\n\n\
\`\`\`json
${jsonSingleEntry.trim()}
\`\`\``;

    expect(parseLorebookResponse(content, 'json')).toEqual(parseLorebookResponse(jsonSingleEntry, 'json'));
  });

  it('parses XML wrapped in a code block without a language tag', () => {
    const content = `\`\`\`
${xmlSingleEntry.trim()}
\`\`\``;

    expect(parseLorebookResponse(content, 'xml')).toEqual(parseLorebookResponse(xmlSingleEntry, 'xml'));
  });

  it('extracts the first code block even with surrounding text', () => {
    const content = `Model explanation before the payload.

\`\`\`xml
${xmlSingleEntry.trim()}
\`\`\`

Model explanation after the payload.`;

    expect(parseLorebookResponse(content, 'xml')).toEqual(parseLorebookResponse(xmlSingleEntry, 'xml'));
  });

  it('extracts and parses a code block when explanatory text appears before and after it', () => {
    const content = `I found one useful lorebook entry for you.
Please review it below.

\`\`\`json
${jsonSingleEntry.trim()}
\`\`\`

That is the full structured response.`;

    expect(parseLorebookResponse(content, 'json')).toEqual(parseLorebookResponse(jsonSingleEntry, 'json'));
  });

  it('uses the first code block when multiple code blocks are present', () => {
    const firstBlock = xmlSingleEntry.trim();
    const secondBlock = `
<lorebooks>
  <entry>
    <worldName>Other World</worldName>
    <name>Ignored Entry</name>
    <triggers>ignore</triggers>
    <content>This should not be parsed.</content>
  </entry>
</lorebooks>`.trim();

    const content = `
\`\`\`xml
${firstBlock}
\`\`\`

\`\`\`xml
${secondBlock}
\`\`\``;

    expect(parseLorebookResponse(content, 'xml')).toEqual(parseLorebookResponse(xmlSingleEntry, 'xml'));
  });

  it('parses XML code blocks whose entry content contains code-like text', () => {
    const content = `
\`\`\`xml
<lorebooks>
  <entry>
    <worldName>Fantasy World</worldName>
    <name>Rune Notes</name>
    <triggers>rune,script</triggers>
    <content>Use \`castSpell()\` with &lt;ritual&gt; markers and [code] blocks.</content>
  </entry>
</lorebooks>
\`\`\``;

    expect(parseLorebookResponse(content, 'xml')).toEqual({
      'Fantasy World': [
        {
          uid: expect.any(Number),
          key: ['rune', 'script'],
          content: 'Use `castSpell()` with <ritual> markers and [code] blocks.',
          comment: 'Rune Notes',
          disable: false,
          keysecondary: [],
        },
      ],
    });
  });

  it('throws a descriptive error for XML with an unclosed entry tag', () => {
    const content = `
<lorebooks>
  <entry>
    <worldName>Fantasy World</worldName>
    <name>Dragon Lore</name>
    <content>Truncated entry</content>
</lorebooks>`;

    expect(() => parseLorebookResponse(content, 'xml')).toThrow(/Model response is not valid XML/i);
  });

  it('throws a descriptive error for XML with an unclosed content tag', () => {
    const content = `
<lorebooks>
  <entry>
    <worldName>Fantasy World</worldName>
    <name>Dragon Lore</name>
    <content>Truncated entry
  </entry>
</lorebooks>`;

    expect(() => parseLorebookResponse(content, 'xml')).toThrow(/Model response is not valid XML/i);
  });

  it('throws for XML missing the closing lorebooks tag under current validation rules', () => {
    const content = `
<lorebooks>
  <entry>
    <worldName>Fantasy World</worldName>
    <name>Dragon Lore</name>
    <triggers>dragon</triggers>
    <content>Almost complete.</content>
  </entry>`;

    expect(() => parseLorebookResponse(content, 'xml')).toThrow(/Model response is not valid XML/i);
  });

  it('parses XML special characters in content correctly', () => {
    const content = `
<lorebooks>
  <entry>
    <worldName>Fantasy World</worldName>
    <name>Encoded Content</name>
    <triggers>encoded</triggers>
    <content>Use &lt;magic&gt; &amp; &quot;quotes&quot; and &apos;apostrophes&apos; &gt; safely.</content>
  </entry>
</lorebooks>`;

    expect(parseLorebookResponse(content, 'xml')).toEqual({
      'Fantasy World': [
        {
          uid: expect.any(Number),
          key: ['encoded'],
          content: `Use <magic> & "quotes" and 'apostrophes' > safely.`,
          comment: 'Encoded Content',
          disable: false,
          keysecondary: [],
        },
      ],
    });
  });

  it('parses XML CDATA sections in content correctly', () => {
    const content = `
<lorebooks>
  <entry>
    <worldName>Fantasy World</worldName>
    <name>CDATA Lore</name>
    <triggers>cdata</triggers>
    <content><![CDATA[Dragons <wyrms> & "elders"]]></content>
  </entry>
</lorebooks>`;

    expect(parseLorebookResponse(content, 'xml')).toEqual({
      'Fantasy World': [
        {
          uid: expect.any(Number),
          key: ['cdata'],
          content: 'Dragons <wyrms> & "elders"',
          comment: 'CDATA Lore',
          disable: false,
          keysecondary: [],
        },
      ],
    });
  });

  it('parses XML with extra whitespace and newlines', () => {
    const content = `

<lorebooks>

  <entry>
    <worldName>
      Fantasy World
    </worldName>
    <name>
      Dragon Lore
    </name>
    <triggers>
      dragon, wyrm
    </triggers>
    <content>
      Dragons are ancient creatures.
    </content>
  </entry>

</lorebooks>

`;

    expect(parseLorebookResponse(content, 'xml')).toEqual({
      'Fantasy World': [
        {
          uid: expect.any(Number),
          key: ['dragon', 'wyrm'],
          content: 'Dragons are ancient creatures.',
          comment: 'Dragon Lore',
          disable: false,
          keysecondary: [],
        },
      ],
    });
  });

  it('throws for invalid XML that is not XML at all', () => {
    expect(() => parseLorebookResponse('this is not xml', 'xml')).toThrow(/Model response is not valid XML/i);
  });

  it('throws for truncated JSON missing a closing bracket', () => {
    const content = '{"lorebooks": {"entry": [{"worldName": "Fantasy World"}]';
    expect(() => parseLorebookResponse(content, 'json')).toThrow(/Model response is not valid JSON/i);
  });

  it('throws for JSON with a trailing comma under current parser behavior', () => {
    const content = `
{
  "lorebooks": {
    "entry": {
      "worldName": "Fantasy World",
      "name": "Dragon Lore",
      "triggers": ["dragon",],
      "content": "Dragons are ancient creatures."
    }
  }
}`;

    expect(() => parseLorebookResponse(content, 'json')).toThrow(/Model response is not valid JSON/i);
  });

  it('throws for JSON with comments under current parser behavior', () => {
    const content = `
{
  // comment
  "lorebooks": {
    "entry": {
      "worldName": "Fantasy World",
      "name": "Dragon Lore",
      "content": "Dragons are ancient creatures."
    }
  }
}`;

    expect(() => parseLorebookResponse(content, 'json')).toThrow(/Model response is not valid JSON/i);
  });

  it('throws for invalid JSON random text', () => {
    expect(() => parseLorebookResponse('this is not json', 'json')).toThrow(/Model response is not valid JSON/i);
  });

  it('parses JSON with extra whitespace', () => {
    const content = `

  {
    "lorebooks": {
      "entry": {
        "worldName": "Fantasy World",
        "name": "Dragon Lore",
        "triggers": ["dragon", "wyrm"],
        "content": "Dragons are ancient creatures."
      }
    }
  }

`;

    expect(parseLorebookResponse(content, 'json')).toEqual({
      'Fantasy World': [
        {
          uid: expect.any(Number),
          key: ['dragon', 'wyrm'],
          content: 'Dragons are ancient creatures.',
          comment: 'Dragon Lore',
          disable: false,
          keysecondary: [],
        },
      ],
    });
  });

  it('returns an empty object for an empty JSON object', () => {
    expect(parseLorebookResponse('{}', 'json')).toEqual({});
  });

  it('normalizes XML comma-separated triggers into an array', () => {
    const content = `
<lorebooks>
  <entry>
    <worldName>Fantasy World</worldName>
    <name>Dragon Lore</name>
    <triggers>word1, word2,word3</triggers>
    <content>Dragons are ancient creatures.</content>
  </entry>
</lorebooks>`;

    expect(parseLorebookResponse(content, 'xml')['Fantasy World'][0].key).toEqual(['word1', 'word2', 'word3']);
  });

  it('keeps JSON trigger arrays as arrays', () => {
    const result = parseLorebookResponse(jsonSingleEntry, 'json');
    expect(result['Fantasy World'][0].key).toEqual(['dragon', 'wyrm', 'drake']);
  });

  it('defaults missing triggers to an empty array', () => {
    const content = `
{
  "lorebooks": {
    "entry": {
      "worldName": "Fantasy World",
      "name": "Dragon Lore",
      "content": "Dragons are ancient creatures."
    }
  }
}`;

    expect(parseLorebookResponse(content, 'json')['Fantasy World'][0].key).toEqual([]);
  });

  it('turns an empty XML triggers string into an empty array', () => {
    const content = `
<lorebooks>
  <entry>
    <worldName>Fantasy World</worldName>
    <name>Dragon Lore</name>
    <triggers></triggers>
    <content>Dragons are ancient creatures.</content>
  </entry>
</lorebooks>`;

    expect(parseLorebookResponse(content, 'xml')['Fantasy World'][0].key).toEqual([]);
  });

  it('normalizes a single XML entry object into an array result', () => {
    expect(parseLorebookResponse(xmlSingleEntry, 'xml')['Fantasy World']).toHaveLength(1);
  });

  it('normalizes a single JSON entry object into an array result', () => {
    expect(parseLorebookResponse(jsonSingleEntry, 'json')['Fantasy World']).toHaveLength(1);
  });

  it('returns an empty object for an empty content string', () => {
    expect(parseLorebookResponse('', 'xml')).toEqual({});
  });

  it('returns an empty object for whitespace-only content', () => {
    expect(parseLorebookResponse('   \n\t  ', 'json')).toEqual({});
  });

  it('returns an empty object for null or undefined content', () => {
    expect(parseLorebookResponse(null as unknown as string, 'xml')).toEqual({});
    expect(parseLorebookResponse(undefined as unknown as string, 'json')).toEqual({});
  });

  it('throws for an empty code block under current parser behavior', () => {
    expect(() => parseLorebookResponse('```\n```', 'xml')).toThrow(/Model response is not valid XML/i);
  });

  it('returns an empty object when lorebooks exists without an entry key', () => {
    expect(parseLorebookResponse('{"lorebooks": {}}', 'json')).toEqual({});
  });

  it('returns an empty object when lorebooks.entry is null', () => {
    expect(parseLorebookResponse('{"lorebooks": {"entry": null}}', 'json')).toEqual({});
  });

  it('parses XML by concatenating previousContent with the new content', () => {
    const previousContent = `
<lorebooks>
  <entry>
    <worldName>Fantasy World</worldName>
    <name>Dragon Lore</name>
    <triggers>dragon,wyrm</triggers>
    <content>Dragons are ancient `;
    const content = `creatures of immense power.</content>
  </entry>
</lorebooks>`;

    expect(parseLorebookResponse(content, 'xml', { previousContent })).toEqual({
      'Fantasy World': [
        {
          uid: expect.any(Number),
          key: ['dragon', 'wyrm'],
          content: 'Dragons are ancient creatures of immense power.',
          comment: 'Dragon Lore',
          disable: false,
          keysecondary: [],
        },
      ],
    });
  });

  it('parses JSON when previousContent and new content concatenate into valid JSON', () => {
    const previousContent = getPrefilled('Fantasy World', baseEntry, 'json');
    const fullContent = getFull('Fantasy World', baseEntry, 'json');
    const content = fullContent.slice(previousContent.length);

    expect(parseLorebookResponse(content, 'json', { previousContent })).toEqual({
      'Fantasy World': [baseEntry],
    });
  });

  it('maps id to uid when the id field is present', () => {
    expect(parseLorebookResponse(xmlSingleEntry, 'xml')['Fantasy World'][0].uid).toBe(12345);
  });

  it('generates a numeric uid when the id field is missing', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.123456);

    const content = `
<lorebooks>
  <entry>
    <worldName>Fantasy World</worldName>
    <name>Dragon Lore</name>
    <triggers>dragon</triggers>
    <content>Dragons are ancient creatures.</content>
  </entry>
</lorebooks>`;

    const result = parseLorebookResponse(content, 'xml');

    expect(result['Fantasy World'][0].uid).toBe(123456);
    expect(typeof result['Fantasy World'][0].uid).toBe('number');
  });

  it('maps name to comment and defaults missing name to an empty string', () => {
    const content = `
{
  "lorebooks": {
    "entry": [
      {
        "worldName": "Fantasy World",
        "name": "Dragon Lore",
        "content": "Named entry."
      },
      {
        "worldName": "Fantasy World",
        "content": "Unnamed entry."
      }
    ]
  }
}`;

    const result = parseLorebookResponse(content, 'json');

    expect(result['Fantasy World'][0].comment).toBe('Dragon Lore');
    expect(result['Fantasy World'][1].comment).toBe('');
  });

  it('maps content and defaults missing content to an empty string', () => {
    const content = `
{
  "lorebooks": {
    "entry": [
      {
        "worldName": "Fantasy World",
        "name": "With Content",
        "content": "Filled."
      },
      {
        "worldName": "Fantasy World",
        "name": "Without Content"
      }
    ]
  }
}`;

    const result = parseLorebookResponse(content, 'json');

    expect(result['Fantasy World'][0].content).toBe('Filled.');
    expect(result['Fantasy World'][1].content).toBe('');
  });

  it('always sets disable to false and keysecondary to an empty array', () => {
    const entry = parseLorebookResponse(jsonSingleEntry, 'json')['Fantasy World'][0];

    expect(entry.disable).toBe(false);
    expect(entry.keysecondary).toEqual([]);
  });

  it('round-trips XML using getPrefilled and previousContent', () => {
    const prefilled = getPrefilled('Fantasy World', baseEntry, 'xml');
    const full = getFull('Fantasy World', baseEntry, 'xml');
    const content = full.slice(prefilled.length);

    expect(parseLorebookResponse(content, 'xml', { previousContent: prefilled })).toEqual({
      'Fantasy World': [baseEntry],
    });
  });

  it('round-trips JSON using getFull', () => {
    expect(parseLorebookResponse(getFull('Fantasy World', baseEntry, 'json'), 'json')).toEqual({
      'Fantasy World': [baseEntry],
    });
  });
});
