import {
  GetRandomQuestionBegin,
  GetRandomQuestionSuccess,
  GetRandomQuestionFailure,
  GetAnswersFailure,
  GetAnswersSuccess,
  GetAnswersBegin,
  StartQuiz,
  StartQuizAutomatically
} from './quiz.actions';
import { EQuizActionType } from '@state/enums/QuizAction.enums';
import {
  dummyRandomQuestion,
  dummyAnswers
} from '@state/utils/dummy-test-data';

describe('Quiz Actions', () => {
  describe('StartQuiz', () => {
    it('has the correct type', () => {
      const action = StartQuiz();
      expect(action.type).toBe(EQuizActionType.StartQuiz);
    });
  });
  describe('StartQuizAutomatically', () => {
    it('has the correct type', () => {
      const action = StartQuizAutomatically();
      expect(action.type).toBe(EQuizActionType.StartQuizAutomatically);
    });
  });
  describe('GetRandomQuestionBegin', () => {
    it('has the correct type', () => {
      const action = GetRandomQuestionBegin();
      expect(action.type).toBe(EQuizActionType.GetRandomQuestionBegin);
    });
  });

  describe('GetRandomQuestionSuccess', () => {
    it('has the correct type', () => {
      const action = GetRandomQuestionSuccess({
        payload: { question: dummyRandomQuestion }
      });
      expect(action.type).toBe(EQuizActionType.GetRandomQuestionSuccess);
    });
  });

  describe('GetRandomQuestionFailure', () => {
    it('has the correct type', () => {
      const action = GetRandomQuestionFailure({
        payload: { error: 'error' }
      });
      expect(action.type).toBe(EQuizActionType.GetRandomQuestionFailure);
    });
  });

  describe('GetAnswersBegin', () => {
    it('has the correct type', () => {
      const action = GetAnswersBegin();
      expect(action.type).toBe(EQuizActionType.GetAnswersBegin);
    });
  });
});
describe('GetAnswersSuccess', () => {
  it('has the correct type', () => {
    const action = GetAnswersSuccess({
      payload: { answers: dummyAnswers }
    });
    expect(action.type).toBe(EQuizActionType.GetAnswersSuccess);
  });
});

describe('GetAnswersFailure', () => {
  it('has the correct type', () => {
    const action = GetAnswersFailure({
      payload: { error: 'error' }
    });
    expect(action.type).toBe(EQuizActionType.GetAnswersFailure);
  });
});
