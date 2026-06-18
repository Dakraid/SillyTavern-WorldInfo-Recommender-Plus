import { type FC, useState, useEffect, useCallback, useMemo, useRef } from 'react';
import {
  STButton,
  STConnectionProfileSelect,
  STFancyDropdown,
  STPresetSelect,
  STTextarea,
  type PresetItem,
  type DropdownItem as FancyDropdownItem,
  Popup,
} from 'sillytavern-utils-lib/components/react';
import { type BuildPromptOptions, getWorldInfos } from 'sillytavern-utils-lib';
import {
  groups,
  selected_group,
  st_createWorldInfoEntry,
  st_echo,
  st_getCharaFilename,
  this_chid,
  world_names,
} from 'sillytavern-utils-lib/config';
import type { WIEntry } from 'sillytavern-utils-lib/types/world-info';
import type { Session } from '../generate.js';
import { type ExtensionSettings, type ResponseFormat, settingsManager } from '../settings.js';
import type { Character } from 'sillytavern-utils-lib/types';
import type { RegexScriptData } from 'sillytavern-utils-lib/types/regex';
import { SuggestedEntry } from './SuggestedEntry.js';
import * as Handlebars from 'handlebars';
import { useForceUpdate } from '../hooks/useForceUpdate.js';
import { SelectEntriesPopup, type SelectEntriesPopupRef } from './SelectEntriesPopup.js';
import { POPUP_TYPE } from 'sillytavern-utils-lib/types/popup';
import { ReviseSessionManager } from './ReviseSessionManager.js';
import {
  entriesDiffer,
  findMatchingEntry,
  getExtendedFieldOverrides,
  isDuplicateSuggestion,
} from '../utils/entry-comparison.js';
import { WI_ENTRY_DEFAULTS } from '../types/wi-entry-extended.js';
import { ParseFixerPopup } from './ParseFixerPopup.js';
import { parseLorebookResponse } from '../parsers.js';
import {
  clearGenerationResults,
  getGenerationState,
  startGeneration,
  subscribeGeneration,
} from '../background-generation.js';

if (!Handlebars.helpers['join']) {
  Handlebars.registerHelper('join', (array: any, separator: any) => {
    if (Array.isArray(array)) {
      return array.join(typeof separator === 'string' ? separator : ', ');
    }
    return '';
  });
}

if (!Handlebars.helpers['is_not_empty']) {
  Handlebars.registerHelper('is_not_empty', function (this: any, value: any, options: any) {
    if (!value) {
      return options.inverse(this);
    }
    if (Array.isArray(value)) {
      return value.length > 0 ? options.fn(this) : options.inverse(this);
    }
    if (typeof value === 'object' && Object.keys(value).length > 0) {
      return options.fn(this);
    }
    if (typeof value !== 'object' && !Array.isArray(value)) {
      return options.fn(this);
    }
    return options.inverse(this);
  });
}

Handlebars.registerHelper('eq', (a: unknown, b: unknown) => a === b);

const globalContext = SillyTavern.getContext();

const getAvatar = () => (this_chid ? st_getCharaFilename(this_chid) : selected_group);

function applyEntryToWorldEntries(
  worldEntries: WIEntry[],
  entry: WIEntry,
  worldName: string,
): { status: 'added' | 'updated' | 'unchanged' } {
  const existingEntry = findMatchingEntry(entry, worldEntries);

  if (existingEntry) {
    if (!entriesDiffer(entry, existingEntry)) return { status: 'unchanged' };
    Object.assign(existingEntry, {
      key: entry.key,
      content: entry.content,
      comment: entry.comment,
      ...getExtendedFieldOverrides(entry),
    });
    return { status: 'updated' };
  }

  const stFormat = { entries: Object.fromEntries(worldEntries.map((e) => [e.uid, e])) };
  const newEntry = st_createWorldInfoEntry(worldName, stFormat);
  if (!newEntry) throw new Error('Failed to create new World Info entry.');

  Object.assign(newEntry, {
    key: entry.key,
    content: entry.content,
    comment: entry.comment,
    ...getExtendedFieldOverrides(entry),
  });
  worldEntries.push(newEntry);

  return { status: 'added' };
}

function mergeSuggestedEntries(
  currentSuggested: Record<string, WIEntry[]>,
  parsedEntries: Record<string, WIEntry[]>,
): { suggestedEntries: Record<string, WIEntry[]>; addedCount: number } {
  const newSuggested = structuredClone(currentSuggested);
  let addedCount = 0;

  for (const [worldName, entries] of Object.entries(parsedEntries)) {
    if (!newSuggested[worldName]) newSuggested[worldName] = [];
    for (const entry of entries) {
      if (!isDuplicateSuggestion(entry, newSuggested[worldName])) {
        newSuggested[worldName].push(entry);
        addedCount++;
      }
    }
  }

  return { suggestedEntries: newSuggested, addedCount };
}

interface PasteBodyPopupProps {
  initialFormat: ResponseFormat;
  onSubmit: (body: string, format: ResponseFormat) => boolean;
  onClose: () => void;
}

const PasteBodyPopup: FC<PasteBodyPopupProps> = ({ initialFormat, onSubmit, onClose }) => {
  const [format, setFormat] = useState<ResponseFormat>(initialFormat);
  const [body, setBody] = useState('');

  const handleSubmit = () => {
    if (onSubmit(body, format)) {
      onClose();
    }
  };

  return (
    <div className="card">
      <h3>Paste Lorebook Body</h3>
      <label>
        Format
        <select className="text_pole" value={format} onChange={(e) => setFormat(e.target.value as ResponseFormat)}>
          <option value="xml">XML</option>
          <option value="json">JSON</option>
        </select>
      </label>
      <p>Parsed entries are added to Suggested Entries. Edit them there before committing.</p>
      <STTextarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Paste lorebook JSON or XML here..."
        rows={10}
        style={{ marginTop: '5px', width: '100%' }}
      />
      <div className="actions" style={{ marginTop: '10px' }}>
        <STButton onClick={handleSubmit} className="menu_button interactable">
          Parse Body
        </STButton>
        <STButton onClick={onClose} className="menu_button interactable">
          Cancel
        </STButton>
      </div>
    </div>
  );
};

export const MainPopup: FC = () => {
  const forceUpdate = useForceUpdate();
  const settings = settingsManager.getSettings();
  const [session, setSession] = useState<Session>({
    suggestedEntries: {},
    blackListedEntries: [],
    selectedWorldNames: [],
    selectedEntryUids: {},
    regexIds: {},
  });
  const [allWorldNames, setAllWorldNames] = useState<string[]>([]);
  const [entriesGroupByWorldName, setEntriesGroupByWorldName] = useState<Record<string, WIEntry[]>>({});
  const [groupMembers, setGroupMembers] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAddingAll, setIsAddingAll] = useState(false);
  const [isSelectingEntries, setIsSelectingEntries] = useState(false);
  const [isImporting, setIsImporting] = useState(false);
  const [isPastingBody, setIsPastingBody] = useState(false);
  const [isGlobalReviseOpen, setIsGlobalReviseOpen] = useState(false);
  const [parseFixerData, setParseFixerData] = useState<{
    rawContent: string;
    format: ResponseFormat;
    errorMessage: string;
    previousContent?: string;
    continueFrom?: { worldName: string; entry: WIEntry; prompt: string; mode: 'continue' | 'revise' };
  } | null>(null);

  const selectEntriesPopupRef = useRef<SelectEntriesPopupRef>(null);
  const importPopupRef = useRef<SelectEntriesPopupRef>(null);
  const inFlightAdditions = useRef<Set<string>>(new Set());

  const avatarKey = useMemo(() => getAvatar() ?? '_global', [this_chid, selected_group]);
  const generationState = getGenerationState();
  const isGenerating = generationState.isRunning;
  const generationStatus = generationState.status;

  const claimGenerationState = useCallback(() => {
    const state = getGenerationState();

    if (state.results) {
      const results = state.results;
      const continueFrom = state.continueFrom;

      setSession((prev) => {
        if (continueFrom) {
          const newSuggested = structuredClone(prev.suggestedEntries);
          const worldName = continueFrom.worldName;
          const updatedEntry = results[worldName]?.[0];

          if (newSuggested[worldName] && updatedEntry) {
            const entryIndex = newSuggested[worldName].findIndex(
              (e) => e.uid === continueFrom.entry.uid && e.comment === continueFrom.entry.comment,
            );

            if (entryIndex !== -1) {
              newSuggested[worldName][entryIndex] = updatedEntry;
            }
          }
          return { ...prev, suggestedEntries: newSuggested };
        }

        const { suggestedEntries } = mergeSuggestedEntries(prev.suggestedEntries, results);
        return { ...prev, suggestedEntries };
      });
      clearGenerationResults();
      return;
    }

    if (state.error) {
      const error = state.error;
      if (error.rawContent && error.format) {
        setParseFixerData({
          rawContent: error.rawContent,
          format: error.format,
          errorMessage: error.message,
          previousContent: error.previousContent,
          continueFrom: error.continueFrom,
        });
      } else {
        st_echo('error', error.message);
      }
      clearGenerationResults();
      return;
    }

    if (state.finishedAt && state.status === 'No results') {
      st_echo('warning', 'No results from AI');
      clearGenerationResults();
    }
  }, []);

  useEffect(() => {
    const claimIfReady = () => {
      if (!isLoading) {
        claimGenerationState();
      }
    };

    claimIfReady();
    const unsubscribe = subscribeGeneration(() => {
      claimIfReady();
      forceUpdate();
    });
    return unsubscribe;
  }, [claimGenerationState, forceUpdate, isLoading]);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      setEntriesGroupByWorldName({});
      setAllWorldNames([]);
      setGroupMembers([]);

      const avatar = getAvatar();
      const key = `worldInfoRecommend_${avatarKey}`;

      const savedSession: Partial<Session> = JSON.parse(localStorage.getItem(key) ?? '{}');
      const initialSession: Session = {
        suggestedEntries: savedSession.suggestedEntries ?? {},
        blackListedEntries: savedSession.blackListedEntries ?? [],
        selectedWorldNames: savedSession.selectedWorldNames ?? [],
        selectedEntryUids: savedSession.selectedEntryUids ?? {},
        regexIds: savedSession.regexIds ?? {},
      };

      let loadedEntries: Record<string, WIEntry[]> = {};
      if (avatar) {
        if (selected_group) {
          const groupWorldInfo = await getWorldInfos(['chat', 'persona', 'global'], true);
          if (groupWorldInfo) loadedEntries = groupWorldInfo;

          const group = groups.find((g: any) => g.id === selected_group);
          if (group) {
            for (const member of group.members) {
              const index = globalContext.characters.findIndex((c: Character) => c.avatar === member);
              if (index !== -1) {
                const worldInfo = await getWorldInfos(['character'], true, index);
                if (worldInfo) loadedEntries = { ...loadedEntries, ...worldInfo };
              }
            }
          }
        } else {
          loadedEntries = await getWorldInfos(['all'], true, this_chid);
        }
      } else {
        for (const worldName of world_names) {
          const worldInfo = await globalContext.loadWorldInfo(worldName);
          if (worldInfo) loadedEntries[worldName] = Object.values(worldInfo.entries);
        }
      }
      setEntriesGroupByWorldName(loadedEntries);
      const loadedWorldNames = Object.keys(loadedEntries);
      setAllWorldNames(loadedWorldNames);

      if (initialSession.selectedWorldNames.length === 0 && avatarKey !== '_global') {
        initialSession.selectedWorldNames = [...loadedWorldNames];
      } else {
        initialSession.selectedWorldNames = initialSession.selectedWorldNames.filter((name) =>
          loadedWorldNames.includes(name),
        );
      }

      const validEntryUids: Record<string, number[]> = {};
      if (initialSession.selectedEntryUids) {
        for (const [worldName, uids] of Object.entries(initialSession.selectedEntryUids)) {
          if (loadedEntries[worldName]) {
            const worldEntryUids = new Set(loadedEntries[worldName].map((e) => e.uid));
            const validUids = uids.filter((uid) => worldEntryUids.has(uid));
            if (validUids.length > 0) {
              validEntryUids[worldName] = validUids;
            }
          }
        }
      }
      initialSession.selectedEntryUids = validEntryUids;
      setSession(initialSession);

      if (selected_group) {
        const group = groups.find((g: any) => g.id === selected_group);
        if (group?.generation_mode === 0) {
          const members = group.members
            .map((memberAvatar: string) => globalContext.characters.find((c: Character) => c.avatar === memberAvatar))
            .filter((c?: Character): c is Character => !!c);
          setGroupMembers(members);
        }
      }

      setIsLoading(false);
    };

    loadData();
  }, [avatarKey]);

  useEffect(() => {
    if (isLoading) return;
    const key = `worldInfoRecommend_${avatarKey}`;
    localStorage.setItem(key, JSON.stringify(session));
  }, [session, avatarKey, isLoading]);

  const updateSetting = <K extends keyof ExtensionSettings>(key: K, value: ExtensionSettings[K]) => {
    settingsManager.getSettings()[key] = value;
    settingsManager.saveSettings();
    forceUpdate();
  };

  const updateContextToSend = <K extends keyof ExtensionSettings['contextToSend']>(
    key: K,
    value: ExtensionSettings['contextToSend'][K],
  ) => {
    settingsManager.getSettings().contextToSend[key] = value;
    settingsManager.saveSettings();
    forceUpdate();
  };

  const addEntry = useCallback(
    async (entry: WIEntry, selectedWorldName: string, skipSave = false): Promise<'added' | 'updated' | 'unchanged'> => {
      const dedupKey = `${selectedWorldName}::${entry.uid}::${(entry.comment ?? '').trim().toLowerCase()}`;
      if (inFlightAdditions.current.has(dedupKey)) {
        return 'unchanged';
      }
      inFlightAdditions.current.add(dedupKey);

      try {
        const worldInfoCopy = structuredClone(entriesGroupByWorldName);
        if (!worldInfoCopy[selectedWorldName]) {
          worldInfoCopy[selectedWorldName] = [];
        }

        const { status } = applyEntryToWorldEntries(worldInfoCopy[selectedWorldName], entry, selectedWorldName);
        setEntriesGroupByWorldName(worldInfoCopy);

        if (!skipSave) {
          const finalFormat = {
            entries: Object.fromEntries(worldInfoCopy[selectedWorldName].map((e: WIEntry) => [e.uid, e])),
          };
          await globalContext.saveWorldInfo(selectedWorldName, finalFormat);
          globalContext.reloadWorldInfoEditor(selectedWorldName, true);
        }

        return status;
      } finally {
        inFlightAdditions.current.delete(dedupKey);
      }
    },
    [entriesGroupByWorldName],
  );

  const handleGeneration = useCallback(
    async (continueFrom?: { worldName: string; entry: WIEntry; prompt: string; mode: 'continue' | 'revise' }) => {
      if (!settings.profileId) return st_echo('warning', 'Please select a connection profile.');

      const userPrompt = continueFrom?.prompt ?? settings.promptPresets[settings.promptPreset].content;

      if (!continueFrom && !userPrompt) {
        return st_echo('warning', 'Please enter a prompt.');
      }

      if (getGenerationState().isRunning) {
        return st_echo('warning', 'Generation already in progress.');
      }

      const profile = globalContext.extensionSettings.connectionManager?.profiles?.find(
        (p) => p.id === settings.profileId,
      );
      if (!profile) return st_echo('error', 'Connection profile not found.');

      const avatar = getAvatar();
      const buildPromptOptions: BuildPromptOptions = {
        presetName: profile.preset,
        contextName: profile.context,
        instructName: profile.instruct,
        syspromptName: profile.sysprompt,
        ignoreCharacterFields: !settings.contextToSend.charCard,
        ignoreWorldInfo: true,
        ignoreAuthorNote: !settings.contextToSend.authorNote,
        maxContext:
          settings.maxContextType === 'custom'
            ? settings.maxContextValue
            : settings.maxContextType === 'profile'
              ? 'preset'
              : 'active',
        includeNames: !!selected_group,
      };

      if (!avatar) {
        buildPromptOptions.messageIndexesBetween = { start: -1, end: -1 };
      } else {
        switch (settings.contextToSend.messages.type) {
          case 'none':
            buildPromptOptions.messageIndexesBetween = { start: -1, end: -1 };
            break;
          case 'first':
            buildPromptOptions.messageIndexesBetween = { start: 0, end: settings.contextToSend.messages.first ?? 10 };
            break;
          case 'last': {
            const lastCount = settings.contextToSend.messages.last ?? 10;
            const chatLength = globalContext.chat?.length ?? 0;
            buildPromptOptions.messageIndexesBetween = {
              end: Math.max(0, chatLength - 1),
              start: Math.max(0, chatLength - lastCount),
            };
            break;
          }
          case 'range':
            if (settings.contextToSend.messages.range)
              buildPromptOptions.messageIndexesBetween = settings.contextToSend.messages.range;
            break;
        }
      }

      const promptSettings = structuredClone(settings.prompts);
      if (!settings.contextToSend.stDescription) delete (promptSettings as any).stDescription;
      if (!settings.contextToSend.worldInfo || session.selectedWorldNames.length === 0)
        delete (promptSettings as any).currentLorebooks;
      const anySuggestedEntries = Object.values(session.suggestedEntries).some((e) => e.length > 0);
      if (!settings.contextToSend.suggestedEntries || !anySuggestedEntries)
        delete (promptSettings as any).suggestedLorebooks;
      if (session.blackListedEntries.length === 0) delete (promptSettings as any).blackListedEntries;

      const continueFromPayload = continueFrom
        ? { worldName: continueFrom.worldName, entry: continueFrom.entry, mode: continueFrom.mode }
        : undefined;

      startGeneration({
        profileId: settings.profileId,
        userPrompt,
        responseFormat: settings.responseFormat,
        buildPromptOptions,
        session: structuredClone(session),
        entriesGroupByWorldName: structuredClone(entriesGroupByWorldName),
        promptSettings,
        mainContextList: settings.mainContextTemplatePresets[settings.mainContextTemplatePreset].prompts
          .filter((p) => p.enabled)
          .map((p) => ({ promptName: p.promptName, role: p.role })),
        maxResponseToken: settings.maxResponseToken,
        continueFrom: continueFromPayload,
      });
    },
    [settings, session, entriesGroupByWorldName],
  );

  const handleParseFixerAccept = useCallback((parsedEntries: Record<string, WIEntry[]>) => {
    setSession((prev) => {
      const { suggestedEntries } = mergeSuggestedEntries(prev.suggestedEntries, parsedEntries);
      return { ...prev, suggestedEntries };
    });
    setParseFixerData(null);
    st_echo('success', 'Manual parse succeeded!');
  }, []);

  const handleParseFixerAcceptRaw = useCallback(
    (rawContent: string) => {
      if (!parseFixerData) {
        return;
      }

      const uid = Math.floor(Math.random() * 1000000);
      const minimalEntry: WIEntry = {
        ...WI_ENTRY_DEFAULTS,
        uid,
        key: ['manual'],
        content: rawContent,
        comment: 'Unparsed Response',
        disable: false,
        keysecondary: [],
      };
      setSession((prev) => {
        const newSuggested = { ...prev.suggestedEntries };
        const worldName =
          parseFixerData.continueFrom?.worldName ?? Object.keys(entriesGroupByWorldName)[0] ?? 'unknown';
        if (!newSuggested[worldName]) newSuggested[worldName] = [];
        newSuggested[worldName].push(minimalEntry);
        return { ...prev, suggestedEntries: newSuggested };
      });
      setParseFixerData(null);
      st_echo('info', 'Raw content added as a suggestion. Edit the entry to fix structure.');
    },
    [entriesGroupByWorldName, parseFixerData],
  );

  const handleAddSingleEntry = useCallback(
    async (entry: WIEntry, worldName: string, selectedTargetWorld: string) => {
      try {
        const status = await addEntry(entry, selectedTargetWorld);
        if (status === 'unchanged') {
          st_echo('info', `No changes detected for "${entry.comment}". Entry was not updated.`);
        } else {
          st_echo('success', status === 'added' ? 'Entry added' : 'Entry updated');
        }

        setSession((prev) => {
          const newSuggested = { ...prev.suggestedEntries };
          if (newSuggested[worldName]) {
            newSuggested[worldName] = newSuggested[worldName].filter(
              (e) =>
                !(
                  e.uid === entry.uid ||
                  (entry.comment && (e.comment ?? '').trim().toLowerCase() === entry.comment.trim().toLowerCase())
                ),
            );
          }
          return { ...prev, suggestedEntries: newSuggested };
        });
      } catch (error: any) {
        console.error(error);
        st_echo('error', `Failed to add entry: ${error.message}`);
      }
    },
    [addEntry],
  );

  const handleAddAll = async () => {
    const totalEntries = Object.values(session.suggestedEntries).flat().length;
    if (totalEntries === 0) return st_echo('warning', 'No entries to add.');

    const confirm = await globalContext.Popup.show.confirm(
      'Add All',
      `Are you sure you want to add/update all ${totalEntries} suggested entries?`,
    );
    if (!confirm) return;

    setIsAddingAll(true);
    try {
      // Single mutable clone for all iterations — fixes stale closure bug
      const worldInfoCopy = structuredClone(entriesGroupByWorldName);

      let addedCount = 0;
      let updatedCount = 0;
      let unchangedCount = 0;
      const failedEntries: { worldName: string; entry: WIEntry }[] = [];
      const modifiedWorlds = new Set<string>();
      const entriesToAdd: { worldName: string; entry: WIEntry }[] = [];

      // Build the flat list of entries to process
      Object.entries(session.suggestedEntries).forEach(([worldName, entries]) => {
        entries.forEach((entry) => {
          const targetWorldName = allWorldNames.includes(worldName) ? worldName : (allWorldNames[0] ?? '');
          if (targetWorldName) entriesToAdd.push({ worldName: targetWorldName, entry });
        });
      });

      // Apply each entry to the SAME mutable clone
      for (const { worldName, entry } of entriesToAdd) {
        if (!worldInfoCopy[worldName]) {
          worldInfoCopy[worldName] = [];
        }
        try {
          const { status } = applyEntryToWorldEntries(worldInfoCopy[worldName], entry, worldName);
          if (status === 'added') addedCount++;
          else if (status === 'updated') updatedCount++;
          else unchangedCount++;
          if (status !== 'unchanged') modifiedWorlds.add(worldName);
        } catch (error) {
          st_echo('error', `Failed to process entry: ${entry.comment}`);
          failedEntries.push({ worldName, entry });
        }
      }

      // Batch save from the ACTUAL modified clone
      for (const worldName of modifiedWorlds) {
        try {
          const finalFormat = { entries: Object.fromEntries(worldInfoCopy[worldName].map((e: WIEntry) => [e.uid, e])) };
          await globalContext.saveWorldInfo(worldName, finalFormat);
          globalContext.reloadWorldInfoEditor(worldName, true);
        } catch (error) {
          st_echo('error', `Failed to save world: ${worldName}`);
        }
      }

      // Set React state from the modified clone
      setEntriesGroupByWorldName(worldInfoCopy);

      // Only clear successfully processed suggestions; keep failed ones
      if (failedEntries.length === 0) {
        setSession((prev) => ({ ...prev, suggestedEntries: {} }));
      } else {
        setSession((prev) => {
          const newSuggested = { ...prev.suggestedEntries };
          const failedUids = new Set(failedEntries.map((f) => f.entry.uid));
          for (const { worldName, entry } of entriesToAdd) {
            if (!failedUids.has(entry.uid)) {
              if (newSuggested[worldName]) {
                newSuggested[worldName] = newSuggested[worldName].filter((e) => e.uid !== entry.uid);
              }
            }
          }
          for (const key of Object.keys(newSuggested)) {
            if (newSuggested[key].length === 0) delete newSuggested[key];
          }
          return { ...prev, suggestedEntries: newSuggested };
        });
      }

      st_echo('success', `Processed: ${addedCount} new, ${updatedCount} updated, ${unchangedCount} unchanged.`);
    } finally {
      setIsAddingAll(false);
    }
  };

  const handleReset = async () => {
    const confirm = await globalContext.Popup.show.confirm(
      'Reset',
      'Clear all suggestions and reset lorebook selection?',
    );
    if (confirm) {
      setSession((prev) => ({
        ...prev,
        suggestedEntries: {},
        blackListedEntries: [],
        selectedWorldNames: getAvatar() ? [...allWorldNames] : [],
        selectedEntryUids: {},
      }));
      st_echo('success', 'Reset successful');
    }
  };

  const handleRemoveEntry = (entry: WIEntry, worldName: string, isBlacklist: boolean) => {
    setSession((prev) => {
      const newSession = { ...prev };
      if (isBlacklist) {
        newSession.blackListedEntries = [...newSession.blackListedEntries, `${worldName} (${entry.comment})`];
      }
      const newSuggested = { ...newSession.suggestedEntries };
      if (newSuggested[worldName]) {
        newSuggested[worldName] = newSuggested[worldName].filter(
          (e) => !(e.uid === entry.uid && e.comment === entry.comment),
        );
      }
      newSession.suggestedEntries = newSuggested;
      return newSession;
    });
  };

  const handleUpdateEntry = (
    worldName: string,
    originalEntry: WIEntry,
    updatedEntry: WIEntry,
    updatedRegexIds?: Record<string, Partial<RegexScriptData>>,
  ) => {
    setSession((prev) => {
      const newSuggested = { ...prev.suggestedEntries };
      if (newSuggested[worldName]) {
        const entryIndex = newSuggested[worldName].findIndex(
          (e) => e.uid === originalEntry.uid && e.comment === originalEntry.comment,
        );

        if (entryIndex !== -1) {
          newSuggested[worldName][entryIndex] = updatedEntry;
        }
      }
      const newSessionState = { ...prev, suggestedEntries: newSuggested };
      if (updatedRegexIds) {
        newSessionState.regexIds = updatedRegexIds;
      }
      return newSessionState;
    });
  };

  const handleImportEntries = useCallback(
    (selection: Record<string, number[]>) => {
      setSession((prev) => {
        const newSuggested = structuredClone(prev.suggestedEntries);
        let importCount = 0;

        for (const [worldName, uids] of Object.entries(selection)) {
          if (!entriesGroupByWorldName[worldName]) continue;
          if (!newSuggested[worldName]) {
            newSuggested[worldName] = [];
          }

          for (const uid of uids) {
            const alreadySuggested = newSuggested[worldName].some((e) => e.uid === uid);
            if (alreadySuggested) continue;

            const entryToImport = entriesGroupByWorldName[worldName].find((e) => e.uid === uid);
            if (entryToImport) {
              newSuggested[worldName].push(structuredClone(entryToImport));
              importCount++;
            }
          }
        }
        if (importCount > 0) {
          st_echo('success', `Imported ${importCount} entries for revision.`);
        }
        return { ...prev, suggestedEntries: newSuggested };
      });
    },
    [entriesGroupByWorldName],
  );

  const handlePasteBody = useCallback(
    (body: string, format: ResponseFormat): boolean => {
      if (!body.trim()) {
        st_echo('warning', 'Nothing to parse.');
        return false;
      }

      try {
        const parsedEntries = parseLorebookResponse(body, format, {});
        const { addedCount } = mergeSuggestedEntries(session.suggestedEntries, parsedEntries);
        setSession((prev) => {
          const mergeResult = mergeSuggestedEntries(prev.suggestedEntries, parsedEntries);
          return { ...prev, suggestedEntries: mergeResult.suggestedEntries };
        });

        if (addedCount > 0) {
          st_echo('success', `Parsed ${addedCount} entries.`);
        } else {
          st_echo('info', 'No entries found in body.');
        }
        return true;
      } catch (err: any) {
        st_echo('error', `Failed to parse: ${err instanceof Error ? err.message : String(err)}`);
        return false;
      }
    },
    [session.suggestedEntries],
  );

  const entriesForSelectionPopup = useMemo(() => {
    const result: Record<string, WIEntry[]> = {};
    session.selectedWorldNames.forEach((worldName) => {
      if (entriesGroupByWorldName[worldName]) {
        result[worldName] = entriesGroupByWorldName[worldName];
      }
    });
    return result;
  }, [session.selectedWorldNames, entriesGroupByWorldName]);

  const entriesForGlobalRevise = useMemo(() => {
    const mergedState: Record<string, WIEntry[]> = JSON.parse(JSON.stringify(entriesForSelectionPopup));
    const suggestedByUid = new Map<number, { worldName: string; entry: WIEntry }>();

    Object.entries(session.suggestedEntries).forEach(([worldName, entries]) => {
      entries.forEach((entry) => {
        if (entry.uid) {
          suggestedByUid.set(entry.uid, { worldName, entry });
        }
      });
    });

    Object.entries(mergedState).forEach(([, entries]) => {
      entries.forEach((existingEntry, index) => {
        if (existingEntry.uid && suggestedByUid.has(existingEntry.uid)) {
          entries[index] = suggestedByUid.get(existingEntry.uid)!.entry;
          suggestedByUid.delete(existingEntry.uid);
        }
      });
    });

    suggestedByUid.forEach(({ worldName, entry }) => {
      if (!mergedState[worldName]) {
        mergedState[worldName] = [];
      }
      if (!mergedState[worldName].some((e) => e.uid === entry.uid)) {
        mergedState[worldName].push(entry);
      }
    });

    return mergedState;
  }, [entriesForSelectionPopup, session.suggestedEntries]);

  const handleApplyGlobalRevise = (newState: Record<string, WIEntry[]>) => {
    // Create a map of all original entries for efficient lookup. Key is "worldName::uid".
    const originalEntriesMap = new Map<string, WIEntry>();
    Object.entries(entriesGroupByWorldName).forEach(([worldName, entries]) => {
      entries.forEach((entry) => {
        originalEntriesMap.set(`${worldName}::${entry.uid}`, entry);
      });
    });

    const newSuggestedEntries: Record<string, WIEntry[]> = {};

    // Iterate through the state returned by the revise session.
    Object.entries(newState).forEach(([worldName, entries]) => {
      entries.forEach((revisedEntry) => {
        const compositeKey = `${worldName}::${revisedEntry.uid}`;
        const originalEntry = originalEntriesMap.get(compositeKey);

        let isSuggestion = false;
        if (!originalEntry) {
          // The entry is new; it didn't exist in the original lorebooks.
          isSuggestion = true;
        } else {
          // The entry existed. We must check if it was modified.
          if (entriesDiffer(revisedEntry, originalEntry)) {
            isSuggestion = true;
          }
        }

        // If the entry is new or modified, add it to our list of suggestions.
        if (isSuggestion) {
          if (!newSuggestedEntries[worldName]) {
            newSuggestedEntries[worldName] = [];
          }
          newSuggestedEntries[worldName].push(revisedEntry);
        }
      });
    });

    setSession((prev) => ({ ...prev, suggestedEntries: newSuggestedEntries }));
    st_echo('success', 'Changes from global revise session applied.');
  };

  const promptPresetItems = useMemo(
    (): PresetItem[] => Object.keys(settings.promptPresets).map((key) => ({ value: key, label: key })),
    [settings.promptPresets],
  );

  const worldInfoDropdownItems = useMemo(
    (): FancyDropdownItem[] => allWorldNames.map((name) => ({ value: name, label: name })),
    [allWorldNames],
  );

  const totalSelectedEntries = useMemo(
    () => Object.values(session.selectedEntryUids).reduce((sum, uids) => sum + uids.length, 0),
    [session.selectedEntryUids],
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const suggestedEntriesList = Object.entries(session.suggestedEntries).flatMap(([worldName, entries]) =>
    entries.map((entry) => ({ worldName, entry })),
  );

  return (
    <>
      <div id="worldInfoRecommenderPopup">
        <h2>World Info Recommender</h2>
        <div className="container">
          <div className="column">
            <div className="card">
              <h3>Connection Profile</h3>
              <STConnectionProfileSelect
                initialSelectedProfileId={settings.profileId}
                // @ts-expect-error
                onChange={(profile) => updateSetting('profileId', profile?.id)}
              />
            </div>
            <div className="card">
              <h3>Response Format</h3>
              <select
                value={settings.responseFormat}
                onChange={(e) => updateSetting('responseFormat', e.target.value as 'xml' | 'json')}
              >
                <option value="xml">XML</option>
                <option value="json">JSON</option>
              </select>
            </div>
            <div className="card">
              <h3>Context to Send</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                <label className="checkbox_label">
                  <input
                    type="checkbox"
                    checked={settings.contextToSend.stDescription}
                    onChange={(e) => updateContextToSend('stDescription', e.target.checked)}
                  />
                  Description of SillyTavern and Lorebook
                </label>
                {avatarKey !== '_global' && (
                  <div className="message-options">
                    <h4>Messages to Include</h4>
                    <select
                      className="text_pole"
                      value={settings.contextToSend.messages.type}
                      onChange={(e) =>
                        updateContextToSend('messages', {
                          ...settings.contextToSend.messages,
                          type: e.target.value as any,
                        })
                      }
                    >
                      <option value="none">None</option>
                      <option value="all">All Messages</option>
                      <option value="first">First X Messages</option>
                      <option value="last">Last X Messages</option>
                      <option value="range">Range</option>
                    </select>
                    {settings.contextToSend.messages.type === 'first' && (
                      <div style={{ marginTop: '10px' }}>
                        <label>
                          First{' '}
                          <input
                            type="number"
                            className="text_pole small message-input"
                            min="1"
                            value={settings.contextToSend.messages.first ?? 10}
                            onChange={(e) =>
                              updateContextToSend('messages', {
                                ...settings.contextToSend.messages,
                                first: parseInt(e.target.value) || 10,
                              })
                            }
                          />{' '}
                          Messages
                        </label>
                      </div>
                    )}
                    {settings.contextToSend.messages.type === 'last' && (
                      <div style={{ marginTop: '10px' }}>
                        <label>
                          Last{' '}
                          <input
                            type="number"
                            className="text_pole small message-input"
                            min="1"
                            value={settings.contextToSend.messages.last ?? 10}
                            onChange={(e) =>
                              updateContextToSend('messages', {
                                ...settings.contextToSend.messages,
                                last: parseInt(e.target.value) || 10,
                              })
                            }
                          />{' '}
                          Messages
                        </label>
                      </div>
                    )}
                    {settings.contextToSend.messages.type === 'range' && (
                      <div style={{ marginTop: '10px' }}>
                        <label>
                          Range:{' '}
                          <input
                            type="number"
                            className="text_pole small message-input"
                            min="0"
                            placeholder="Start"
                            value={settings.contextToSend.messages.range?.start ?? 0}
                            onChange={(e) =>
                              updateContextToSend('messages', {
                                ...settings.contextToSend.messages,
                                range: {
                                  ...settings.contextToSend.messages.range!,
                                  start: parseInt(e.target.value) || 0,
                                },
                              })
                            }
                          />{' '}
                          to{' '}
                          <input
                            type="number"
                            className="text_pole small message-input"
                            min="1"
                            placeholder="End"
                            value={settings.contextToSend.messages.range?.end ?? 10}
                            onChange={(e) =>
                              updateContextToSend('messages', {
                                ...settings.contextToSend.messages,
                                range: {
                                  ...settings.contextToSend.messages.range!,
                                  end: parseInt(e.target.value) || 10,
                                },
                              })
                            }
                          />
                        </label>
                      </div>
                    )}
                  </div>
                )}
                <label className="checkbox_label">
                  <input
                    type="checkbox"
                    checked={settings.contextToSend.charCard}
                    onChange={(e) => updateContextToSend('charCard', e.target.checked)}
                  />
                  Char Card
                </label>
                {groupMembers.length > 0 && (
                  <div>
                    <h4>Select Character</h4>
                    <select className="text_pole" title="Select character for your group.">
                      {groupMembers.map((member) => (
                        <option key={member.avatar} value={member.avatar}>
                          {member.name}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
                <label className="checkbox_label">
                  <input
                    type="checkbox"
                    checked={settings.contextToSend.authorNote}
                    onChange={(e) => updateContextToSend('authorNote', e.target.checked)}
                  />{' '}
                  Author Note
                </label>
                <label className="checkbox_label">
                  <input
                    type="checkbox"
                    checked={settings.contextToSend.worldInfo}
                    onChange={(e) => updateContextToSend('worldInfo', e.target.checked)}
                  />{' '}
                  World Info
                </label>
                <div>
                  <h4>Lorebooks to Include</h4>
                  <STFancyDropdown
                    items={worldInfoDropdownItems}
                    value={session.selectedWorldNames}
                    onChange={(newValues) => {
                      setSession((prev) => {
                        const newSelectedEntryUids = { ...prev.selectedEntryUids };
                        const removedWorlds = prev.selectedWorldNames.filter((w) => !newValues.includes(w));
                        removedWorlds.forEach((w) => delete newSelectedEntryUids[w]);
                        return { ...prev, selectedWorldNames: newValues, selectedEntryUids: newSelectedEntryUids };
                      });
                    }}
                    multiple
                    enableSearch
                  />
                </div>
                {session.selectedWorldNames.length > 0 && (
                  <div className="entry-selection-control">
                    <STButton
                      className="menu_button"
                      onClick={() => setIsSelectingEntries(true)}
                      title="Select specific entries from the chosen lorebooks"
                    >
                      <i className="fa-solid fa-list-check"></i>
                      Select Entries
                    </STButton>
                    <span>
                      {totalSelectedEntries > 0 ? `${totalSelectedEntries} selected` : 'All entries included'}
                    </span>
                  </div>
                )}
                <label className="checkbox_label">
                  <input
                    type="checkbox"
                    checked={settings.contextToSend.suggestedEntries}
                    onChange={(e) => updateContextToSend('suggestedEntries', e.target.checked)}
                  />{' '}
                  Existing Suggestions
                </label>
              </div>
            </div>
            <div className="card">
              <label>
                Max Context
                <select
                  className="text_pole"
                  title="Select Max Context Type"
                  value={settings.maxContextType}
                  onChange={(e) => updateSetting('maxContextType', e.target.value as any)}
                >
                  <option value="profile">Use profile preset</option>
                  <option value="sampler">Use active preset in sampler settings</option>
                  <option value="custom">Custom</option>
                </select>
              </label>
              {settings.maxContextType === 'custom' && (
                <label style={{ marginTop: '10px' }}>
                  <input
                    type="number"
                    className="text_pole"
                    min="1"
                    step="1"
                    placeholder="Enter max tokens"
                    value={settings.maxContextValue}
                    onChange={(e) => updateSetting('maxContextValue', parseInt(e.target.value) || 2048)}
                  />
                </label>
              )}
              <label style={{ display: 'block', marginTop: '10px' }}>
                Max Response Tokens
                <input
                  type="number"
                  className="text_pole"
                  min="1"
                  step="1"
                  placeholder="Enter max response tokens"
                  value={settings.maxResponseToken}
                  onChange={(e) => updateSetting('maxResponseToken', parseInt(e.target.value) || 256)}
                />
              </label>
            </div>
            <div className="card">
              <h3>Your Prompt</h3>
              <STPresetSelect
                label="Prompt Preset"
                items={promptPresetItems}
                value={settings.promptPreset}
                readOnlyValues={['default']}
                onChange={(newValue) => updateSetting('promptPreset', newValue ?? 'default')}
                onItemsChange={(newItems) => {
                  const newPresets = newItems.reduce(
                    (acc, item) => {
                      acc[item.value] = settings.promptPresets[item.value] ?? { content: '' };
                      return acc;
                    },
                    {} as Record<string, { content: string }>,
                  );
                  updateSetting('promptPresets', newPresets);
                }}
                enableCreate
                enableRename
                enableDelete
              />
              <STTextarea
                value={settings.promptPresets[settings.promptPreset]?.content ?? ''}
                onChange={(e) => {
                  const newPresets = { ...settings.promptPresets };
                  if (newPresets[settings.promptPreset]) {
                    newPresets[settings.promptPreset].content = e.target.value;
                    updateSetting('promptPresets', newPresets);
                  }
                }}
                placeholder="e.g., 'Suggest entries for places {{user}} visited.'"
                rows={4}
                style={{ marginTop: '5px', width: '100%' }}
              />
              <STButton
                onClick={() => handleGeneration()}
                disabled={isGenerating}
                className="menu_button interactable"
                style={{ marginTop: '5px' }}
              >
                {isGenerating ? generationStatus || 'Generating...' : 'Send Prompt'}
              </STButton>
            </div>
          </div>
          <div className="wide-column">
            <div className="card">
              <h3>Suggested Entries</h3>
              <div className="actions">
                <STButton
                  onClick={handleAddAll}
                  disabled={isGenerating || isAddingAll || suggestedEntriesList.length === 0}
                  className="menu_button interactable"
                >
                  Add All
                </STButton>
                <STButton
                  onClick={() => setIsGlobalReviseOpen(true)}
                  disabled={isGenerating}
                  className="menu_button interactable"
                  title="Revise all selected existing entries and current suggestions in a single chat session"
                >
                  <i className="fa-solid fa-comments"></i> Global Revise
                </STButton>
                <STButton
                  onClick={() => setIsImporting(true)}
                  disabled={isGenerating}
                  className="menu_button interactable"
                  title="Import existing entries to continue/revise them"
                >
                  Import Entry
                </STButton>
                <STButton
                  onClick={() => setIsPastingBody(true)}
                  disabled={isGenerating}
                  className="menu_button interactable"
                  title="Paste a JSON or XML lorebook body and parse it into suggestions"
                >
                  <i className="fa-solid fa-paste"></i> Paste Body
                </STButton>
                <STButton onClick={handleReset} disabled={isGenerating} className="menu_button interactable">
                  Reset
                </STButton>
              </div>
              <div>
                {suggestedEntriesList.length === 0 && <p>No suggestions yet. Send a prompt to get started!</p>}
                {suggestedEntriesList.map(({ worldName, entry }) => (
                  <SuggestedEntry
                    key={`${worldName}-${entry.uid}-${entry.comment}`}
                    initialWorldName={worldName}
                    entry={entry}
                    allWorldNames={allWorldNames}
                    existingEntry={entriesGroupByWorldName[worldName]?.find((e) => e.uid === entry.uid)}
                    sessionRegexIds={session.regexIds}
                    onAdd={handleAddSingleEntry}
                    onRemove={handleRemoveEntry}
                    onContinue={handleGeneration}
                    onUpdate={handleUpdateEntry}
                    entriesGroupByWorldName={entriesGroupByWorldName}
                    sessionForContext={session}
                    contextToSend={settings.contextToSend}
                    generationStatus={isGenerating ? generationStatus : undefined}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {isSelectingEntries && (
        <Popup
          type={POPUP_TYPE.CONFIRM}
          content={
            <SelectEntriesPopup
              ref={selectEntriesPopupRef}
              entriesByWorldName={entriesForSelectionPopup}
              initialSelectedUids={session.selectedEntryUids}
              title="Select Entries to Include in Context"
            />
          }
          onComplete={(confirmed) => {
            if (confirmed && selectEntriesPopupRef.current) {
              const newSelection = selectEntriesPopupRef.current.getSelection();
              setSession((prev) => ({ ...prev, selectedEntryUids: newSelection }));
            }
            setIsSelectingEntries(false);
          }}
          options={{ wide: true }}
        />
      )}
      {isImporting && (
        <Popup
          type={POPUP_TYPE.CONFIRM}
          content={
            <SelectEntriesPopup
              ref={importPopupRef}
              entriesByWorldName={entriesGroupByWorldName}
              initialSelectedUids={{}}
              title="Select Entries to Import for Revision"
            />
          }
          onComplete={(confirmed) => {
            if (confirmed && importPopupRef.current) {
              const selection = importPopupRef.current.getSelection();
              handleImportEntries(selection);
            }
            setIsImporting(false);
          }}
          options={{ wide: true }}
        />
      )}
      {isPastingBody && (
        <Popup
          type={POPUP_TYPE.DISPLAY}
          content={
            <PasteBodyPopup
              initialFormat={settings.responseFormat}
              onSubmit={handlePasteBody}
              onClose={() => setIsPastingBody(false)}
            />
          }
          onComplete={() => setIsPastingBody(false)}
          options={{ wide: true }}
        />
      )}
      {isGlobalReviseOpen && (
        <Popup
          type={POPUP_TYPE.DISPLAY}
          content={
            <ReviseSessionManager
              target={{ type: 'global' }}
              initialState={entriesForGlobalRevise}
              onClose={() => setIsGlobalReviseOpen(false)}
              onApply={handleApplyGlobalRevise}
              sessionForContext={session}
              allEntries={entriesGroupByWorldName}
              contextToSend={settings.contextToSend}
            />
          }
          onComplete={() => setIsGlobalReviseOpen(false)}
          options={{ wide: true, large: true }}
        />
      )}
      {parseFixerData && (
        <Popup
          type={POPUP_TYPE.DISPLAY}
          content={
            <ParseFixerPopup
              rawContent={parseFixerData.rawContent}
              format={parseFixerData.format}
              errorMessage={parseFixerData.errorMessage}
              previousContent={parseFixerData.previousContent}
              onAccept={handleParseFixerAccept}
              onAcceptRaw={handleParseFixerAcceptRaw}
              onCancel={() => {
                setParseFixerData(null);
              }}
            />
          }
          onComplete={() => {
            setParseFixerData(null);
          }}
          options={{ wide: true }}
        />
      )}
    </>
  );
};
