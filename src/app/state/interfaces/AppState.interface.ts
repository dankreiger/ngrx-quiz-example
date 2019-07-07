import { IQuizState } from './QuizState.interface';
import { RouterReducerState } from '@ngrx/router-store';

export interface IAppState {
  quizReducer: IQuizState;
  routerReducer: RouterReducerState;
}
