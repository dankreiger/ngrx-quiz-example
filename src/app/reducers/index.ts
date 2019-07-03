import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { IQuizState } from '../interfaces/QuizState.interface';
import { quizReducer } from './quiz.reducer';
import { IAppState } from '../interfaces/AppState.interface';

export const appInitialState: ActionReducerMap<IAppState> = {
  quizReducer
};

export const reducers: ActionReducerMap<IAppState> = appInitialState;

export const metaReducers: MetaReducer<IAppState>[] = !environment.production
  ? []
  : [];
