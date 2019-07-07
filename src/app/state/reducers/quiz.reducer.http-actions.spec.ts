import { quizReducer, quizReducerInitialState } from './quiz.reducer';
import {
  GetRandomQuestionBegin,
  GetRandomQuestionSuccess,
  GetRandomQuestionFailure,
  GetAnswersBegin,
  GetAnswersSuccess,
  GetAnswersFailure
} from '@state/actions/quiz.actions';
import {
  dummyRandomQuestion,
  dummyAnswers
} from '@state/utils/dummy-test-data';
import { IQuizState } from '@state/interfaces/QuizState.interface';
import { HARD } from '@state/constants/quiz.constants';

describe('QuizReducer HTTP', () => {
  let initialState: IQuizState;
  describe('using HTTP actions to set the new state without mutating the original state', () => {
    describe('GetRandomQuestionBegin action', () => {
      it('sets questionLoading to true', () => {
        /**
         * @given
         */
        initialState = { ...quizReducerInitialState };
        const action = GetRandomQuestionBegin();

        /**
         * @when
         */
        const newState = quizReducer(initialState, action);

        /**
         * @expect
         */
        expect(newState).toEqual({
          ...initialState,
          questionLoading: true
        });
        expect(newState).not.toEqual(initialState);
      });
    });

    describe('GetRandomQuestionSuccess action', () => {
      it('sets a new question and sets questionLoading to false', () => {
        /**
         * @given
         */
        initialState = { ...quizReducerInitialState, questionLoading: true };

        const action = GetRandomQuestionSuccess({
          payload: { question: dummyRandomQuestion }
        });

        /**
         * @when
         */
        const newState = quizReducer(initialState, action);

        /**
         * @expect
         */
        expect(newState).toEqual({
          ...initialState,
          questionLoading: false,
          question: dummyRandomQuestion
        });
        expect(newState).not.toEqual(initialState);
      });
    });

    describe('GetRandomQuestionFailure action', () => {
      it('sets an error and sets questionLoading to false', () => {
        /**
         * @given
         */
        initialState = {
          ...quizReducerInitialState,
          questionLoading: true
        };
        const action = GetRandomQuestionFailure({
          payload: { error: 'question error' }
        });

        /**
         * @when
         */
        const newState = quizReducer(initialState, action);

        /**
         * @expect
         */
        expect(newState).toEqual({
          ...initialState,
          questionLoading: false,
          error: 'question error'
        });
        expect(newState).not.toEqual(initialState);
      });
    });

    describe('GetAnswersBegin action', () => {
      it('sets answersLoading to true', () => {
        /**
         * @given
         */
        initialState = { ...quizReducerInitialState };

        const action = GetAnswersBegin();

        /**
         * @when
         */
        const newState = quizReducer(initialState, action);

        /**
         * @expect
         */
        expect(newState).toEqual({
          ...initialState,
          answersLoading: true
        });
        expect(newState).not.toEqual(initialState);
      });
    });

    describe('GetAnswersSuccess action', () => {
      it('sets an array of answers and answersLoading to false', () => {
        /**
         * @given
         */
        initialState = { ...quizReducerInitialState, answersLoading: true };

        const action = GetAnswersSuccess({
          payload: { answers: dummyAnswers }
        });

        /**
         * @when
         */
        const newState = quizReducer(initialState, action);

        /**
         * @expect
         */
        expect(newState).toEqual({
          ...initialState,
          answersLoading: false,
          answers: dummyAnswers
        });
        expect(newState).not.toEqual(initialState);
      });
    });
    describe('GetAnswersFailure action', () => {
      it('sets an error and sets answersLoading to false', () => {
        /**
         * @given
         */
        initialState = {
          ...quizReducerInitialState,
          answersLoading: true
        };
        const action = GetAnswersFailure({
          payload: { error: 'answers error' }
        });

        /**
         * @when
         */
        const newState = quizReducer(initialState, action);

        /**
         * @expect
         */
        expect(newState).toEqual({
          ...initialState,
          answersLoading: false,
          error: 'answers error'
        });
        expect(newState).not.toEqual(initialState);
      });
    });
  });
});
