import { createReducer, on, Action } from '@ngrx/store';
import {
  GetRandomQuestionBegin,
  GetRandomQuestionSuccess,
  GetRandomQuestionFailure,
  GetAnswersBegin,
  GetAnswersSuccess,
  StartQuiz,
  StartQuizAutomatically
} from '@state/actions/quiz.actions';
import { IQuizState } from '@state/interfaces/QuizState.interface';

export const quizReducerInitialState: IQuizState = {
  quizStarted: false,
  questionLoading: false,
  question: null,
  answersLoading: false,
  answers: null,
  error: null
};

const reducer = createReducer<IQuizState>(
  quizReducerInitialState,
  on(
    StartQuiz,
    (state: IQuizState): IQuizState => ({
      ...state,
      quizStarted: true
    })
  ),
  on(
    StartQuizAutomatically,
    (state: IQuizState): IQuizState => {
      return {
        ...state,
        quizStarted: true
      };
    }
  ),
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
      console.log('TODO: WRITE SPEC');
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
      console.log('TODO: WRITE SPEC');
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
