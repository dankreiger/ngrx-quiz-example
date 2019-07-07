import { IQuizState } from '@state/interfaces/QuizState.interface';
import {
  IncrementCorrectAnswers,
  IncrementIncorrectAnswers,
  ResetQuizData,
  StartQuiz,
  EndQuiz,
  SetLevel,
  ResetScores
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
        answers: []
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
  )
];
