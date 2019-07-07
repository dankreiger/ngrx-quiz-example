import { createReducer, Action } from '@ngrx/store';
import { IQuizState } from '@state/interfaces/QuizState.interface';
import { httpActions } from './quiz.reducer.http-actions';
import { synchronousActions } from './quiz.reducer.synchronous-actions';
import { MEDIUM } from '@state/constants/quiz.constants';

export const quizReducerInitialState: IQuizState = {
  quizStarted: false,
  questionLoading: false,
  question: null,
  answersLoading: false,
  answers: [],
  error: null,
  level: MEDIUM,
  correctAnswers: 0,
  incorrectAnswers: 0
};

/**
 * TODO: split the questions and answers into separate reducers
 * (there are too many actions)
 */
const reducer = createReducer<IQuizState>(
  quizReducerInitialState,
  ...httpActions,
  ...synchronousActions
);

export function quizReducer(state: IQuizState, action: Action): IQuizState {
  return reducer(state, action);
}
