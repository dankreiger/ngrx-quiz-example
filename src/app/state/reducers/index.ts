import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '@environments/environment';
import { quizReducer } from './quiz.reducer';
import { IAppState } from '@state/interfaces/AppState.interface';
import { localStorageSyncReducer } from './localStorage';
import { routerReducer } from '@ngrx/router-store';

export const appInitialState: ActionReducerMap<IAppState> = {
  quizReducer,
  routerReducer
};

export const reducers: ActionReducerMap<IAppState> = appInitialState;

export const metaReducers: MetaReducer<IAppState>[] = !environment.production
  ? [localStorageSyncReducer]
  : [localStorageSyncReducer];
