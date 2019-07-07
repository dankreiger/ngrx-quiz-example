import { ActionReducer } from '@ngrx/store';
import { IAppState } from '@state/interfaces/AppState.interface';
import { localStorageSync } from 'ngrx-store-localstorage';

const STORE_KEYS_TO_PERSIST = [
  'correctAnswers',
  'incorrectAnswers',
  'question',
  'answers',
  'quizStarted'
];

const localStorageConfig = {
  keys: [{ quizReducer: STORE_KEYS_TO_PERSIST }],
  rehydrate: true
};

export function localStorageSyncReducer(
  reducer: ActionReducer<IAppState>
): ActionReducer<IAppState> {
  return localStorageSync(localStorageConfig)(reducer);
}
