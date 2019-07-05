import { quizReducer, quizReducerInitialState } from './quiz.reducer';
import { GetRandomQuestionBegin } from '@state/actions/quiz.actions';

describe('QuizReducer', () => {
  describe('GetRandomQuestionBegin action', () => {
    it('returns loading as true without mutating the initial state', () => {
      const action = GetRandomQuestionBegin();
      const newState = quizReducer(quizReducerInitialState, action);

      expect(newState).toEqual({ ...quizReducerInitialState, loading: true });
      expect(newState).not.toEqual(quizReducerInitialState);
    });
  });
});
