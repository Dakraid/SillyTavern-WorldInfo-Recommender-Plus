import { FC, useMemo } from 'react';
import { diffWords } from 'diff';
import { WIEntry } from 'sillytavern-utils-lib/types/world-info';
import { getComparableEntryFieldChanges } from '../utils/entry-comparison.js';

interface CompareEntryPopupProps {
  originalEntry: WIEntry;
  newEntry: WIEntry;
}

export const CompareEntryPopup: FC<CompareEntryPopupProps> = ({ originalEntry, newEntry }) => {
  const changedFields = useMemo(
    () => getComparableEntryFieldChanges(originalEntry, newEntry),
    [originalEntry, newEntry],
  );

  const renderDiff = (before: string, after: string) => {
    const diff = diffWords(before, after);
    let originalHtml = '';
    let newHtml = '';

    diff.forEach((part) => {
      const sanitizedValue = part.value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;')
        .replace(/\n/g, '<br>');

      const style = part.added
        ? 'color: green; background-color: #e6ffed;'
        : part.removed
          ? 'color: red; background-color: #ffebe9;'
          : 'color: grey;';

      const span = `<span style="${style}">${sanitizedValue}</span>`;

      if (!part.added) {
        originalHtml += span;
      }
      if (!part.removed) {
        newHtml += span;
      }
    });

    return { originalHtml, newHtml };
  };

  return (
    <div className="compare-popup" style={{ padding: '10px' }}>
      <h3>Compare Changes</h3>
      <div className="compare-state-list">
        {changedFields.length === 0 ? (
          <p className="subtle" style={{ textAlign: 'center' }}>
            No entry changes were detected.
          </p>
        ) : (
          changedFields.map(({ field, label, before, after }) => {
            const diffResult = renderDiff(before, after);

            return (
              <div key={field} className="compare-state-item">
                <h4>{label}</h4>
                <div className="compare-state-header">
                  <span>Original</span>
                  <span>Suggestion</span>
                </div>
                <div className="compare-state-diff-grid">
                  <div className="content" dangerouslySetInnerHTML={{ __html: diffResult.originalHtml }} />
                  <div className="content" dangerouslySetInnerHTML={{ __html: diffResult.newHtml }} />
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
