import { createReducer, on, Action } from '@ngrx/store';
import { IQuizState } from '../interfaces/QuizState.interface';
import {
  GetRandomQuestionBegin,
  GetRandomQuestionSuccess
} from '../actions/quiz.actions';

export const quizReducerInitialState: IQuizState = {
  loading: false,
  question: null
};

const reducer = createReducer<IQuizState>(
  quizReducerInitialState,
  on(
    GetRandomQuestionBegin,
    (state: IQuizState): IQuizState => {
      return {
        ...state,
        loading: true
      };
    }
  ),
  on(
    GetRandomQuestionSuccess,
    (state: IQuizState, { payload }): IQuizState => {
      console.log('TODO: WRITE SPEC');
      return {
        ...state,
        loading: false,
        question: payload.question
      };
    }
  )
);

export function quizReducer(state: IQuizState, action: Action): IQuizState {
  return reducer(state, action);
}
