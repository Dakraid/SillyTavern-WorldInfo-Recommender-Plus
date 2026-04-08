import { WIEntry } from 'sillytavern-utils-lib/types/world-info';
import {
  EXTENDED_WI_ENTRY_FIELDS,
  TIER1_WI_ENTRY_FIELDS,
  WI_ENTRY_DEFAULTS,
  WI_ENTRY_POSITION_OPTIONS,
  WI_ENTRY_ROLE_OPTIONS,
  WI_ENTRY_TIER1_FIELD_LABELS,
} from '../types/wi-entry-extended.js';

export interface EntryFieldChange {
  field: string;
  label: string;
  before: string;
  after: string;
}

const positionLabels = Object.fromEntries(WI_ENTRY_POSITION_OPTIONS.map(({ value, label }) => [value, label]));
const roleLabels = Object.fromEntries(WI_ENTRY_ROLE_OPTIONS.map(({ value, label }) => [value, label]));

function normalizeComparableValue(value: unknown): unknown {
  return value ?? null;
}

function formatEntryValue(value: unknown): string {
  if (value == null || value === '') return '—';
  if (typeof value === 'boolean') return value ? 'Yes' : 'No';
  if (Array.isArray(value)) return value.length > 0 ? value.join(', ') : '—';
  return String(value);
}

function formatTier1FieldValue(field: (typeof TIER1_WI_ENTRY_FIELDS)[number], value: unknown): string {
  if (field === 'position') {
    return formatEntryValue(positionLabels[Number(value)] ?? value);
  }

  if (field === 'role') {
    return formatEntryValue(roleLabels[Number(value)] ?? value);
  }

  if (field === 'probability' && typeof value === 'number') {
    return `${value}%`;
  }

  return formatEntryValue(value);
}

function normalizedKeys(entry: WIEntry): string {
  return (entry.key || []).slice().sort().join(',');
}

/**
 * Compares two WIEntry objects, including all extended fields.
 * Returns true if they differ in any field.
 */
export function entriesAreEqual(a: WIEntry, b: WIEntry): boolean {
  if ((a.content || '') !== (b.content || '')) return false;
  if ((a.comment || '') !== (b.comment || '')) return false;
  if (normalizedKeys(a) !== normalizedKeys(b)) return false;

  for (const field of EXTENDED_WI_ENTRY_FIELDS) {
    const aValue = (a as any)[field];
    const bValue = (b as any)[field];

    if (aValue === bValue) continue;
    if (aValue == null && bValue == null) continue;

    return false;
  }

  return true;
}

/**
 * Returns true if two WIEntry objects differ (shorthand for !entriesAreEqual).
 */
export function entriesDiffer(a: WIEntry, b: WIEntry): boolean {
  return !entriesAreEqual(a, b);
}

export function getComparableEntryFieldChanges(before: WIEntry, after: WIEntry): EntryFieldChange[] {
  const changes: EntryFieldChange[] = [];

  if ((before.comment || '') !== (after.comment || '')) {
    changes.push({
      field: 'comment',
      label: 'Name',
      before: formatEntryValue(before.comment),
      after: formatEntryValue(after.comment),
    });
  }

  if (normalizedKeys(before) !== normalizedKeys(after)) {
    changes.push({
      field: 'key',
      label: 'Triggers',
      before: formatEntryValue(before.key || []),
      after: formatEntryValue(after.key || []),
    });
  }

  if ((before.content || '') !== (after.content || '')) {
    changes.push({
      field: 'content',
      label: 'Content',
      before: formatEntryValue(before.content),
      after: formatEntryValue(after.content),
    });
  }

  for (const field of TIER1_WI_ENTRY_FIELDS) {
    const beforeValue = normalizeComparableValue(before[field] ?? WI_ENTRY_DEFAULTS[field]);
    const afterValue = normalizeComparableValue(after[field] ?? WI_ENTRY_DEFAULTS[field]);

    if (beforeValue === afterValue) continue;

    changes.push({
      field,
      label: WI_ENTRY_TIER1_FIELD_LABELS[field],
      before: formatTier1FieldValue(field, beforeValue),
      after: formatTier1FieldValue(field, afterValue),
    });
  }

  return changes;
}

/**
 * Extracts extended fields that differ from WI_ENTRY_DEFAULTS, suitable for Object.assign.
 */
export function getExtendedFieldOverrides(entry: WIEntry): Partial<WIEntry> {
  const overrides: Record<string, any> = {};

  for (const field of EXTENDED_WI_ENTRY_FIELDS) {
    const value = (entry as any)[field];
    const defaultValue = (WI_ENTRY_DEFAULTS as any)[field];

    if (value !== undefined && value !== defaultValue) {
      overrides[field] = value;
    }
  }

  return overrides;
}
