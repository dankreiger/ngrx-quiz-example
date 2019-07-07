import { createReducer, on, Action } from '@ngrx/store';
import {
  GetRandomQuestionBegin,
  GetRandomQuestionSuccess,
  GetRandomQuestionFailure,
  GetAnswersBegin,
  GetAnswersSuccess,
  StartQuiz,
  GetAnswersFailure,
  EndQuiz,
  IncrementCorrectAnswers,
  IncrementIncorrectAnswers,
  ResetQuizData
} from '@state/actions/quiz.actions';
import { IQuizState } from '@state/interfaces/QuizState.interface';

export const quizReducerInitialState: IQuizState = {
  quizStarted: false,
  questionLoading: false,
  question: null,
  answersLoading: false,
  answers: null,
  error: null,
  correctAnswers: 0,
  incorrectAnswers: 0
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
    EndQuiz,
    (state: IQuizState): IQuizState => {
      return {
        ...state,
        quizStarted: false
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
        ...state,
        answersLoading: true
      };
    }
  ),
  on(
    GetAnswersSuccess,
    (state: IQuizState, { payload }): IQuizState => {
      console.log('TODO: WRITE SPEC');
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
      console.log('TODO: WRITE SPEC');
      return {
        ...state,
        answersLoading: false,
        error: payload.error
      };
    }
  ),
  on(
    IncrementCorrectAnswers,
    (state: IQuizState): IQuizState => {
      return {
        ...state,
        answersLoading: false,
        correctAnswers: state.correctAnswers + 1
      };
    }
  ),
  on(
    IncrementIncorrectAnswers,
    (state: IQuizState): IQuizState => {
      return {
        ...state,
        answersLoading: false,
        incorrectAnswers: state.incorrectAnswers + 1
      };
    }
  ),
  on(
    ResetQuizData,
    (state: IQuizState): IQuizState => {
      return {
        ...state,
        question: null,
        answers: null
      };
    }
  )
);

export function quizReducer(state: IQuizState, action: Action): IQuizState {
  return reducer(state, action);
}
