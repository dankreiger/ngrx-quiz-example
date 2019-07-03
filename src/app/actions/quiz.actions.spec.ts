import { GetRandomQuestionBegin } from './quiz.actions';
import { EQuizActionType } from 'src/enums/QuizAction.enums';

describe('Quiz Actions', () => {
  describe('GetRandomQuestionBegin', () => {
    it('has the correct type', () => {
      const action = GetRandomQuestionBegin();
      expect(action.type).toBe(EQuizActionType.GetRandomQuestionBegin);
    });
  });
});
