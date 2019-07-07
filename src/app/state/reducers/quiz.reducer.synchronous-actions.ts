import { IQuizState } from '@state/interfaces/QuizState.interface';
import {
  IncrementCorrectAnswers,
  IncrementIncorrectAnswers,
  ResetQuizData,
  StartQuiz,
  EndQuiz,
  SetLevel,
  ResetScores,
  LaunchConfirmation,
  AcceptConfirmation,
  CloseConfirmation,
  ResetConfirmation,
  StartAnswerButtonsEntering,
  FinishAnswerButtonsEntering
} from '@state/actions/quiz.actions';
import { on } from '@ngrx/store';

export const synchronousActions = [
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
        answers: [],
        confirmationAccepted: false
      };
    }
  ),
  on(
    SetLevel,
    (state: IQuizState, { payload }): IQuizState => {
      return {
        ...state,
        level: payload.level
      };
    }
  ),
  on(
    ResetScores,
    (state: IQuizState): IQuizState => {
      return {
        ...state,
        correctAnswers: 0,
        incorrectAnswers: 0
      };
    }
  ),
  on(
    LaunchConfirmation,
    (state: IQuizState): IQuizState => {
      return {
        ...state,
        confirmationModalOpen: true
      };
    }
  ),
  on(
    CloseConfirmation,
    (state: IQuizState): IQuizState => {
      return {
        ...state,
        confirmationModalOpen: false
      };
    }
  ),
  on(
    AcceptConfirmation,
    (state: IQuizState): IQuizState => {
      return {
        ...state,
        confirmationAccepted: true
      };
    }
  ),
  on(
    ResetConfirmation,
    (state: IQuizState): IQuizState => {
      return {
        ...state,
        confirmationAccepted: false
      };
    }
  ),
  on(
    StartAnswerButtonsEntering,
    (state: IQuizState): IQuizState => {
      return {
        ...state,
        answerButtonsEntering: true
      };
    }
  ),
  on(
    FinishAnswerButtonsEntering,
    (state: IQuizState): IQuizState => {
      return {
        ...state,
        answerButtonsEntering: false
      };
    }
  )
];
