import type { WIEntry } from 'sillytavern-utils-lib/types/world-info';

export const EXTENDED_WI_ENTRY_FIELDS = [
  'order',
  'position',
  'depth',
  'role',
  'selectiveLogic',
  'probability',
  'groupWeight',
  'delayUntilRecursion',
  'selective',
  'constant',
  'excludeRecursion',
  'preventRecursion',
  'useProbability',
  'groupOverride',
  'addMemo',
  'matchPersonaDescription',
  'matchCharacterDescription',
  'group',
  'outletName',
  'scanDepth',
  'sticky',
  'cooldown',
  'delay',
  'caseSensitive',
  'matchWholeWords',
] as const;

export type ExtendedWIEntryField = (typeof EXTENDED_WI_ENTRY_FIELDS)[number];

export const TIER1_WI_ENTRY_FIELDS = [
  'position',
  'depth',
  'order',
  'role',
  'selective',
  'constant',
  'probability',
  'group',
  'excludeRecursion',
  'preventRecursion',
] as const;

export type Tier1WIEntryField = (typeof TIER1_WI_ENTRY_FIELDS)[number];

export const WI_ENTRY_POSITION_OPTIONS = [
  { value: 0, label: 'Before Char Definition' },
  { value: 1, label: 'After Char Definition' },
  { value: 2, label: "Before Author's Note" },
  { value: 3, label: "After Author's Note" },
  { value: 4, label: 'At Depth (from bottom)' },
  { value: 5, label: 'At Depth (from top)' },
  { value: 6, label: 'Before Example Messages' },
  { value: 7, label: 'After Example Messages' },
] as const;

export const WI_ENTRY_ROLE_OPTIONS = [
  { value: 0, label: 'System' },
  { value: 1, label: 'User' },
  { value: 2, label: 'Assistant' },
] as const;

export const WI_ENTRY_TIER1_FIELD_LABELS = {
  position: 'Position',
  depth: 'Depth',
  order: 'Order',
  role: 'Role',
  selective: 'Selective',
  constant: 'Constant',
  probability: 'Probability',
  group: 'Group',
  excludeRecursion: 'Exclude Recursion',
  preventRecursion: 'Prevent Recursion',
} satisfies Record<Tier1WIEntryField, string>;

declare module 'sillytavern-utils-lib/types/world-info' {
  interface WIEntry {
    /** Injection priority. Default: `100`. */
    order: number;

    /** Where content is placed in the prompt pipeline. Default: `0`. */
    position: number;

    /** Position depth. Default: `4`. */
    depth: number;

    /** Injection role (`system` / `user` / `assistant`). Default: `0`. */
    role: number;

    /** Secondary-key matching logic type. Default: `0`. */
    selectiveLogic: number;

    /** Activation chance percentage. Default: `100`. */
    probability: number;

    /** Weight within an entry group. Default: `100`. */
    groupWeight: number;

    /** Recursion depth delay before activation. Default: `0`. */
    delayUntilRecursion: number;

    /** Enables secondary-key matching logic. Default: `true`. */
    selective: boolean;

    /** Always injects this entry. Default: `false`. */
    constant: boolean;

    /** Skips matching during recursion. Default: `false`. */
    excludeRecursion: boolean;

    /** Prevents recursive activation. Default: `false`. */
    preventRecursion: boolean;

    /** Applies the probability gate. Default: `true`. */
    useProbability: boolean;

    /** Allows the group to override normal selection. Default: `false`. */
    groupOverride: boolean;

    /** Includes this entry in memo output. Default: `true`. */
    addMemo: boolean;

    /** Matches against the persona description. Default: `false`. */
    matchPersonaDescription: boolean;

    /** Matches against the character description. Default: `false`. */
    matchCharacterDescription: boolean;

    /** Entry group name. Default: `""`. */
    group: string;

    /** Outlet name. Default: `""`. */
    outletName: string;

    /** Overrides chat scan depth when set. Default: `null`. */
    scanDepth: number | null;

    /** Sticky counter turns. Default: `null`. */
    sticky: number | null;

    /** Cooldown turns. Default: `null`. */
    cooldown: number | null;

    /** Delay turns. Default: `null`. */
    delay: number | null;

    /** Enables case-sensitive matching when set. Default: `null`. */
    caseSensitive: boolean | null;

    /** Enables whole-word matching when set. Default: `null`. */
    matchWholeWords: boolean | null;
  }
}

export const WI_ENTRY_DEFAULTS = {
  order: 100,
  position: 0,
  depth: 4,
  role: 0,
  selectiveLogic: 0,
  probability: 100,
  groupWeight: 100,
  delayUntilRecursion: 0,
  selective: true,
  constant: false,
  excludeRecursion: false,
  preventRecursion: false,
  useProbability: true,
  groupOverride: false,
  addMemo: true,
  matchPersonaDescription: false,
  matchCharacterDescription: false,
  group: '',
  outletName: '',
  scanDepth: null,
  sticky: null,
  cooldown: null,
  delay: null,
  caseSensitive: null,
  matchWholeWords: null,
} satisfies Readonly<Pick<WIEntry, ExtendedWIEntryField>>;
