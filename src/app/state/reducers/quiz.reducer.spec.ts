import { quizReducer, quizReducerInitialState } from './quiz.reducer';
import {
  GetRandomQuestionBegin,
  GetRandomQuestionSuccess,
  GetRandomQuestionFailure,
  StartQuiz,
  EndQuiz,
  IncrementCorrectAnswers,
  IncrementIncorrectAnswers
} from '@state/actions/quiz.actions';
import { dummyRandomQuestion } from '@state/utils/dummy-test-data';
import { IQuizState } from '@state/interfaces/QuizState.interface';

describe('QuizReducer', () => {
  let initialState: IQuizState;
  describe('StartQuiz action', () => {
    it('sets quizStarted to true without mutating the initial state', () => {
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
    it('sets quizStarted to false without mutating the initial state', () => {
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

  describe('GetQuestionBegin action', () => {
    it('returns loading as true without mutating the initial state', () => {
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

  describe('GetQuestionSuccesss action', () => {
    it('returns a new question and sets loading to false without mutating the initial state', () => {
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

  describe('GetQuestionFailure action', () => {
    it('returns an error and sets loading to false without mutating the initial state', () => {
      /**
       * @given
       */
      initialState = {
        ...quizReducerInitialState,
        questionLoading: true
      };
      const action = GetRandomQuestionFailure({
        payload: { error: 'error' }
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
        error: 'error'
      });
      expect(newState).not.toEqual(initialState);
    });
  });

  describe('IncrementCorrectAnswers action', () => {
    it('returns increments the correct answers without mutating the initial state', () => {
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
    it('returns increments the incorrect answers without mutating the initial state', () => {
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
});
