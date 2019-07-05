import { createReducer, on, Action } from '@ngrx/store';
import { IQuizState } from '@state/interfaces/QuizState.interface';
import {
  GetRandomQuestionBegin,
  GetRandomQuestionSuccess,
  GetRandomQuestionFailure,
  GetAnswersBegin,
  GetAnswersSuccess
} from '@state/actions/quiz.actions';

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
        question: payload.question
      };
    }
  ),

  on(
    GetRandomQuestionFailure,
    (state: IQuizState, { payload }): IQuizState => {
      console.log('TODO: WRITE SPEC');
      return {
        ...state,
        error: payload.error
      };
    }
  ),
  on(
    GetAnswersBegin,
    (state: IQuizState): IQuizState => {
      return {
        ...state
      };
    }
  ),
  on(
    GetAnswersSuccess,
    (state: IQuizState, { payload }): IQuizState => {
      console.log('TODO: WRITE SPEC');
      return {
        ...state,
        answers: payload.answers
      };
    }
  )
);

export function quizReducer(state: IQuizState, action: Action): IQuizState {
  return reducer(state, action);
}
