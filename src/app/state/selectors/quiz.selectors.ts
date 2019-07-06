import { createSelector, createFeatureSelector } from '@ngrx/store';
import { IAppState } from '@state/interfaces/AppState.interface';
import { IQuizState } from '@state/interfaces/QuizState.interface';
import { IRandomQuestion } from '@state/interfaces/RandomQuestion.interface';

export const selectQuizState = createFeatureSelector<IAppState, IQuizState>(
  'quizReducer'
);

export const selectQuizStarted = createSelector(
  selectQuizState,
  (state: IQuizState): boolean => state.quizStarted
);

export const selectQuestion = createSelector(
  selectQuizState,
  (state: IQuizState): IRandomQuestion => state.question
);
