import { useState, useEffect, useMemo, useCallback, forwardRef, useImperativeHandle } from 'react';
import {
  STButton,
  STFancyDropdown,
  STSortableList,
  STTextarea,
  SortableListItemData,
  DropdownItem,
} from 'sillytavern-utils-lib/components/react';
import { st_runRegexScript } from 'sillytavern-utils-lib/config';
import { RegexScriptData } from 'sillytavern-utils-lib/types/regex';
import { WIEntry } from 'sillytavern-utils-lib/types/world-info';
import { WI_ENTRY_DEFAULTS, WI_ENTRY_POSITION_OPTIONS, WI_ENTRY_ROLE_OPTIONS } from '../types/wi-entry-extended.js';

const globalContext = SillyTavern.getContext();

const parseIntegerInput = (value: string, fallback: number, min?: number, max?: number): number => {
  const trimmedValue = value.trim();
  if (!trimmedValue) return fallback;

  const parsedValue = Number.parseInt(trimmedValue, 10);
  if (Number.isNaN(parsedValue)) return fallback;

  if (min !== undefined && parsedValue < min) return min;
  if (max !== undefined && parsedValue > max) return max;

  return parsedValue;
};

/**
 * The props for the EditEntryPopup component.
 */
interface EditEntryPopupProps {
  entry: WIEntry;
  initialRegexIds: Record<string, Partial<RegexScriptData>>;
}

/**
 * Defines the imperative functions that can be called on this component's instance
 * from a parent component using a ref.
 */
export interface EditEntryPopupRef {
  getFormData: () => {
    updatedEntry: WIEntry;
    updatedRegexIds: Record<string, Partial<RegexScriptData>>;
  };
}

/**
 * A popup form for editing a suggested World Info entry, including its content and associated regex scripts.
 * It's wrapped in `forwardRef` to allow the parent component to call `getFormData` imperatively when the
 * user confirms the changes via an external "OK" button (provided by the <Popup> component).
 */
export const EditEntryPopup = forwardRef<EditEntryPopupRef, EditEntryPopupProps>(({ entry, initialRegexIds }, ref) => {
  // --- Internal State Management ---
  const [allRegexes, setAllRegexes] = useState<RegexScriptData[]>([]);
  const [title, setTitle] = useState(entry.comment);
  const [keywords, setKeywords] = useState(entry.key.join(', '));
  const [content, setContent] = useState(entry.content);
  const [regexListItems, setRegexListItems] = useState<SortableListItemData[]>([]);
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);
  const [position, setPosition] = useState(entry.position ?? WI_ENTRY_DEFAULTS.position);
  const [depth, setDepth] = useState(String(entry.depth ?? WI_ENTRY_DEFAULTS.depth));
  const [order, setOrder] = useState(String(entry.order ?? WI_ENTRY_DEFAULTS.order));
  const [role, setRole] = useState(entry.role ?? WI_ENTRY_DEFAULTS.role);
  const [selective, setSelective] = useState(entry.selective ?? WI_ENTRY_DEFAULTS.selective);
  const [constant, setConstant] = useState(entry.constant ?? WI_ENTRY_DEFAULTS.constant);
  const [probability, setProbability] = useState(String(entry.probability ?? WI_ENTRY_DEFAULTS.probability));
  const [group, setGroup] = useState(entry.group ?? WI_ENTRY_DEFAULTS.group);
  const [excludeRecursion, setExcludeRecursion] = useState(
    entry.excludeRecursion ?? WI_ENTRY_DEFAULTS.excludeRecursion,
  );
  const [preventRecursion, setPreventRecursion] = useState(
    entry.preventRecursion ?? WI_ENTRY_DEFAULTS.preventRecursion,
  );

  useEffect(() => {
    const loadedRegexes = globalContext.extensionSettings.regex ?? [];
    setAllRegexes(loadedRegexes);

    const initialItems = Object.entries(initialRegexIds)
      .map(([id, data]) => {
        const regex = loadedRegexes.find((r) => r.id === id);
        return regex ? { id: regex.id, label: regex.scriptName, enabled: !data?.disabled } : null;
      })
      // @ts-ignore
      .filter((item): item is SortableListItemData => item !== null);
    // @ts-ignore
    setRegexListItems(initialItems);
  }, [initialRegexIds]);

  // --- Imperative Handle ---
  // This exposes the `getFormData` function to the parent component through the ref.
  // It's the bridge that allows the parent's "OK" button to retrieve this component's final state.
  useImperativeHandle(ref, () => ({
    getFormData: () => {
      const updatedEntry: WIEntry = {
        ...entry,
        comment: title.trim(),
        key: keywords
          .split(',')
          .map((k) => k.trim())
          .filter(Boolean),
        content,
        position,
        depth: parseIntegerInput(depth, entry.depth ?? WI_ENTRY_DEFAULTS.depth, 0),
        order: parseIntegerInput(order, entry.order ?? WI_ENTRY_DEFAULTS.order),
        role,
        selective,
        constant,
        probability: parseIntegerInput(probability, entry.probability ?? WI_ENTRY_DEFAULTS.probability, 0, 100),
        group: group.trim(),
        excludeRecursion,
        preventRecursion,
      };

      const updatedRegexIds = regexListItems.reduce(
        (acc, item) => {
          acc[item.id] = { disabled: !item.enabled };
          return acc;
        },
        {} as Record<string, Partial<RegexScriptData>>,
      );

      return { updatedEntry, updatedRegexIds };
    },
  }));

  // --- Derived Data & Handlers ---
  const fancyDropdownItems = useMemo(
    (): DropdownItem[] => allRegexes.map((r) => ({ value: r.id, label: r.scriptName })),
    [allRegexes],
  );

  const selectedRegexIds = useMemo(() => regexListItems.map((item) => item.id), [regexListItems]);
  const showsDepthInput = position === 4 || position === 5;

  const handleSimulate = useCallback(() => {
    let simulatedContent = entry.content; // Start from original content for simulation
    const orderedEnabledItems = regexListItems.filter((item) => item.enabled);

    for (const item of orderedEnabledItems) {
      const regex = allRegexes.find((r) => r.id === item.id);
      if (regex) {
        simulatedContent = st_runRegexScript(regex, simulatedContent);
      }
    }
    setContent(simulatedContent);
  }, [regexListItems, allRegexes, entry.content]);

  const handleRegexSelectionChange = (newIds: string[]) => {
    const newItems = newIds
      .map((id) => {
        const existingItem = regexListItems.find((item) => item.id === id);
        if (existingItem) return existingItem;
        const regex = allRegexes.find((r) => r.id === id);
        return regex ? { id: regex.id, label: regex.scriptName, enabled: true } : null;
      })
      .filter((item): item is SortableListItemData => item !== null);
    setRegexListItems(newItems);
  };

  // The component does not render its own buttons, as they are provided by the parent <Popup>.
  return (
    <div className="edit-popup" style={{ padding: '10px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
      <h3>Edit Suggestion</h3>
      <div className="edit-popup-field">
        <label>Title</label>
        <input type="text" className="text_pole" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className="edit-popup-field">
        <label>Keywords (comma-separated)</label>
        <input type="text" className="text_pole" value={keywords} onChange={(e) => setKeywords(e.target.value)} />
      </div>
      <div className="edit-popup-field">
        <h4>Apply Regex Scripts</h4>
        <STFancyDropdown
          items={fancyDropdownItems}
          value={selectedRegexIds}
          onChange={handleRegexSelectionChange}
          multiple
          enableSearch
          placeholder="Select regex scripts..."
        />
        {regexListItems.length > 0 && (
          <STSortableList
            items={regexListItems}
            onItemsChange={setRegexListItems}
            showToggleButton
            showDeleteButton
            sortableJsOptions={{ style: { marginTop: '10px' } }}
          />
        )}
      </div>
      <STButton onClick={handleSimulate} className="menu_button">
        Simulate Regex
      </STButton>
      <STTextarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={8}
        placeholder="Resulting content..."
      />

      <div className="edit-popup-advanced">
        <button
          type="button"
          className="advanced-settings-toggle menu_button"
          onClick={() => setIsAdvancedOpen((isOpen) => !isOpen)}
          aria-expanded={isAdvancedOpen}
        >
          <span>Advanced Settings</span>
          <i className={`fa-solid ${isAdvancedOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
        </button>

        {isAdvancedOpen && (
          <div className="advanced-settings-panel">
            <div className="advanced-settings-grid">
              <div className="edit-popup-field">
                <label>Position</label>
                <select
                  className="text_pole"
                  value={position}
                  onChange={(e) => setPosition(Number.parseInt(e.target.value, 10))}
                >
                  {WI_ENTRY_POSITION_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {showsDepthInput && (
                <div className="edit-popup-field">
                  <label>Depth</label>
                  <input
                    type="number"
                    min={0}
                    className="text_pole"
                    value={depth}
                    onChange={(e) => setDepth(e.target.value)}
                  />
                </div>
              )}

              <div className="edit-popup-field">
                <label>Order</label>
                <input type="number" className="text_pole" value={order} onChange={(e) => setOrder(e.target.value)} />
              </div>

              <div className="edit-popup-field">
                <label>Role</label>
                <select
                  className="text_pole"
                  value={role}
                  onChange={(e) => setRole(Number.parseInt(e.target.value, 10))}
                >
                  {WI_ENTRY_ROLE_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="edit-popup-field">
                <label>Probability</label>
                <input
                  type="number"
                  min={0}
                  max={100}
                  className="text_pole"
                  value={probability}
                  onChange={(e) => setProbability(e.target.value)}
                />
              </div>

              <div className="edit-popup-field">
                <label>Group</label>
                <input type="text" className="text_pole" value={group} onChange={(e) => setGroup(e.target.value)} />
              </div>
            </div>

            <div className="advanced-settings-checkboxes">
              <label className="checkbox_field">
                <input type="checkbox" checked={selective} onChange={(e) => setSelective(e.target.checked)} />
                <span>Selective</span>
              </label>
              <label className="checkbox_field">
                <input type="checkbox" checked={constant} onChange={(e) => setConstant(e.target.checked)} />
                <span>Constant</span>
              </label>
              <label className="checkbox_field">
                <input
                  type="checkbox"
                  checked={excludeRecursion}
                  onChange={(e) => setExcludeRecursion(e.target.checked)}
                />
                <span>Exclude Recursion</span>
              </label>
              <label className="checkbox_field">
                <input
                  type="checkbox"
                  checked={preventRecursion}
                  onChange={(e) => setPreventRecursion(e.target.checked)}
                />
                <span>Prevent Recursion</span>
              </label>
            </div>
          </div>
        )}
      </div>
    </div>
  );
});
