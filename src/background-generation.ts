import type { BuildPromptOptions } from 'sillytavern-utils-lib';
import type { WIEntry } from 'sillytavern-utils-lib/types/world-info';
import { runWorldInfoRecommendation, type Session } from './generate.js';
import type { ResponseFormat } from './settings.js';

export type ContinueFrom = { worldName: string; entry: WIEntry; prompt: string; mode: 'continue' | 'revise' };

export interface StartGenerationParams {
  profileId: string;
  userPrompt: string;
  responseFormat: ResponseFormat;
  buildPromptOptions: BuildPromptOptions;
  session: Session;
  entriesGroupByWorldName: Record<string, WIEntry[]>;
  promptSettings: any;
  mainContextList: { promptName: string; role: any }[];
  maxResponseToken: number;
  continueFrom?: { worldName: string; entry: WIEntry; mode: 'continue' | 'revise' };
}

export interface GenerationState {
  isRunning: boolean;
  status: string;
  results: Record<string, WIEntry[]> | null;
  error: {
    message: string;
    rawContent?: string;
    format?: ResponseFormat;
    previousContent?: string;
    continueFrom?: ContinueFrom;
  } | null;
  continueFrom?: ContinueFrom;
  finishedAt: number | null;
}

const state: GenerationState = {
  isRunning: false,
  status: '',
  results: null,
  error: null,
  continueFrom: undefined,
  finishedAt: null,
};

const subscribers = new Set<() => void>();

function notify() {
  subscribers.forEach((cb) => cb());
}

export function getGenerationState(): GenerationState {
  return state;
}

export function subscribeGeneration(cb: () => void): () => void {
  subscribers.add(cb);
  return () => subscribers.delete(cb);
}

export function clearGenerationResults(): void {
  state.results = null;
  state.error = null;
  state.continueFrom = undefined;
  state.finishedAt = null;
  notify();
}

export function startGeneration(params: StartGenerationParams): void {
  if (state.isRunning) return;

  const continueFrom = params.continueFrom
    ? {
        worldName: params.continueFrom.worldName,
        entry: params.continueFrom.entry,
        prompt: params.userPrompt,
        mode: params.continueFrom.mode,
      }
    : undefined;

  state.isRunning = true;
  state.status = 'Building prompt...';
  state.results = null;
  state.error = null;
  state.continueFrom = continueFrom;
  state.finishedAt = null;
  notify();

  void (async () => {
    try {
      const resultingEntries = await runWorldInfoRecommendation({
        profileId: params.profileId,
        userPrompt: params.userPrompt,
        responseFormat: params.responseFormat,
        buildPromptOptions: params.buildPromptOptions,
        session: params.session,
        entriesGroupByWorldName: params.entriesGroupByWorldName,
        promptSettings: params.promptSettings,
        mainContextList: params.mainContextList,
        maxResponseToken: params.maxResponseToken,
        continueFrom: params.continueFrom,
        onStatusUpdate: (status: string) => {
          state.status = status;
          notify();
        },
      });
      state.results = resultingEntries && Object.keys(resultingEntries).length > 0 ? resultingEntries : null;
      state.status = state.results ? 'Done' : 'No results';
    } catch (err: any) {
      if (err && err.name === 'ParseFailedError') {
        state.error = {
          message: err.message,
          rawContent: err.rawContent,
          format: err.format,
          previousContent: err.previousContent,
          continueFrom,
        };
        state.status = 'Parse failed';
      } else {
        console.error(err);
        state.error = { message: err instanceof Error ? err.message : String(err) };
        state.status = 'Error';
      }
    } finally {
      state.isRunning = false;
      state.finishedAt = Date.now();
      notify();
    }
  })();
}
