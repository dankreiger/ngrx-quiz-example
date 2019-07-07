import { quizReducer, quizReducerInitialState } from './quiz.reducer';
import {
  StartQuiz,
  EndQuiz,
  IncrementCorrectAnswers,
  IncrementIncorrectAnswers,
  SetLevel,
  ResetScores,
  LaunchConfirmation,
  CloseConfirmation,
  AcceptConfirmation,
  ResetConfirmation
} from '@state/actions/quiz.actions';

import { IQuizState } from '@state/interfaces/QuizState.interface';
import { EASY, HARD } from '@state/constants/quiz.constants';

describe('QuizReducer Synchronous', () => {
  let initialState: IQuizState;
  describe('using synchronous actions to set the new state without mutating the original state', () => {
    describe('StartQuiz action', () => {
      it('sets quizStarted to true', () => {
        /**
         * @given
         */
        initialState = { ...quizReducerInitialState };
        const action = StartQuiz();

        /**
         * @when
         */
        const newState = quizReducer(initialState, action);

        /**
         * @expect
         */
        expect(newState).toEqual({
          ...initialState,
          quizStarted: true
        });
        expect(newState).not.toEqual(initialState);
      });
    });

    describe('EndQuiz action', () => {
      it('sets quizStarted to false', () => {
        /**
         * @given
         */
        initialState = { ...quizReducerInitialState, quizStarted: true };
        const action = EndQuiz();

        /**
         * @when
         */
        const newState = quizReducer(initialState, action);

        /**
         * @expect
         */
        expect(newState).toEqual({
          ...initialState,
          quizStarted: false
        });
        expect(newState).not.toEqual(initialState);
      });
    });

    describe('IncrementCorrectAnswers action', () => {
      it('increments the correct answers', () => {
        /**
         * @given
         */
        initialState = {
          ...quizReducerInitialState
        };
        const action = IncrementCorrectAnswers();

        /**
         * @when
         */
        const newState = quizReducer(initialState, action);

        /**
         * @expect
         */
        expect(newState).toEqual({
          ...initialState,
          correctAnswers: 1
        });
        expect(newState).not.toEqual(initialState);
      });
    });
    describe('IncrementIncorrectAnswers action', () => {
      it('increments the incorrect answers', () => {
        /**
         * @given
         */
        initialState = {
          ...quizReducerInitialState
        };
        const action = IncrementIncorrectAnswers();

        /**
         * @when
         */
        const newState = quizReducer(initialState, action);

        /**
         * @expect
         */
        expect(newState).toEqual({
          ...initialState,
          incorrectAnswers: 1
        });
        expect(newState).not.toEqual(initialState);
      });
    });

    describe('SetLevel action', () => {
      it('sets the difficulty level', () => {
        /**
         * @given
         */
        initialState = {
          ...quizReducerInitialState,
          level: HARD
        };
        const action = SetLevel({ payload: { level: EASY } });

        /**
         * @when
         */
        const newState = quizReducer(initialState, action);

        /**
         * @expect
         */
        expect(newState).toEqual({
          ...initialState,
          level: EASY
        });
        expect(newState).not.toEqual(initialState);
      });
    });
    describe('ResetScores action', () => {
      it('resets the correctAnswers and incorrectAnswers to 0', () => {
        /**
         * @given
         */
        initialState = {
          ...quizReducerInitialState,
          correctAnswers: 7,
          incorrectAnswers: 10
        };
        const action = ResetScores();

        /**
         * @when
         */
        const newState = quizReducer(initialState, action);

        /**
         * @expect
         */
        expect(newState).toEqual({
          ...initialState,
          correctAnswers: 0,
          incorrectAnswers: 0
        });
        expect(newState).not.toEqual(initialState);
      });
    });

    describe('LaunchConfirmation action', () => {
      it('sets the confirmationModalOpen to true', () => {
        /**
         * @given
         */
        initialState = {
          ...quizReducerInitialState
        };
        const action = LaunchConfirmation();

        /**
         * @when
         */
        const newState = quizReducer(initialState, action);

        /**
         * @expect
         */
        expect(newState).toEqual({
          ...initialState,
          confirmationModalOpen: true
        });
        expect(newState).not.toEqual(initialState);
      });
    });
    describe('AcceptConfirmation action', () => {
      it('sets confirmationAccepted to true', () => {
        /**
         * @given
         */
        initialState = {
          ...quizReducerInitialState
        };
        const action = AcceptConfirmation();

        /**
         * @when
         */
        const newState = quizReducer(initialState, action);

        /**
         * @expect
         */
        expect(newState).toEqual({
          ...initialState,
          confirmationAccepted: true
        });
        expect(newState).not.toEqual(initialState);
      });
    });
    describe('CloseConfirmation action', () => {
      it('sets the confirmationModalOpen to false', () => {
        /**
         * @given
         */
        initialState = {
          ...quizReducerInitialState,
          confirmationModalOpen: true
        };
        const action = CloseConfirmation();

        /**
         * @when
         */
        const newState = quizReducer(initialState, action);

        /**
         * @expect
         */
        expect(newState).toEqual({
          ...initialState,
          confirmationModalOpen: false
        });
        expect(newState).not.toEqual(initialState);
      });
    });

    describe('ResetConfirmation action', () => {
      it('sets confirmationAccepted to false', () => {
        /**
         * @given
         */
        initialState = {
          ...quizReducerInitialState,
          confirmationAccepted: true
        };
        const action = ResetConfirmation();

        /**
         * @when
         */
        const newState = quizReducer(initialState, action);

        /**
         * @expect
         */
        expect(newState).toEqual({
          ...initialState,
          confirmationAccepted: false
        });
        expect(newState).not.toEqual(initialState);
      });
    });
  });
});
