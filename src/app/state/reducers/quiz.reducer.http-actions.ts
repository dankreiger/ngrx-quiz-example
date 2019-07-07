import { IQuizState } from '@state/interfaces/QuizState.interface';
import { on } from '@ngrx/store';

import {
  GetRandomQuestionBegin,
  GetRandomQuestionSuccess,
  GetRandomQuestionFailure,
  GetAnswersFailure,
  GetAnswersSuccess,
  GetAnswersBegin
} from '@state/actions/quiz.actions';

export const httpActions = [
  on(
    GetRandomQuestionBegin,
    (state: IQuizState): IQuizState => {
      return {
        ...state,
        questionLoading: true
      };
    }
  ),
  on(
    GetRandomQuestionSuccess,
    (state: IQuizState, { payload }): IQuizState => {
      return {
        ...state,
        questionLoading: false,
        question: payload.question
      };
    }
  ),

  on(
    GetRandomQuestionFailure,
    (state: IQuizState, { payload }): IQuizState => {
      return {
        ...state,
        questionLoading: false,
        error: payload.error
      };
    }
  ),
  on(
    GetAnswersBegin,
    (state: IQuizState): IQuizState => {
      return {
        ...state,
        answersLoading: true
      };
    }
  ),
  on(
    GetAnswersSuccess,
    (state: IQuizState, { payload }): IQuizState => {
      return {
        ...state,
        answersLoading: false,
        answers: payload.answers
      };
    }
  ),
  on(
    GetAnswersFailure,
    (state: IQuizState, { payload }): IQuizState => {
      return {
        ...state,
        answersLoading: false,
        error: payload.error
      };
    }
  )
];
