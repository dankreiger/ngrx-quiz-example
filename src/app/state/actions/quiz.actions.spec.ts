import {
  GetRandomQuestionBegin,
  GetRandomQuestionSuccess,
  GetRandomQuestionFailure,
  GetAnswersFailure,
  GetAnswersSuccess,
  GetAnswersBegin,
  StartQuiz,
  EndQuiz,
  IncrementCorrectAnswers,
  IncrementIncorrectAnswers,
  SetLevel,
  ResetScores
} from './quiz.actions';
import { EQuizActionType } from '@state/enums/QuizAction.enums';
import {
  dummyRandomQuestion,
  dummyAnswers
} from '@state/utils/dummy-test-data';
import { HARD } from '@state/constants/quiz.constants';

describe('Quiz Actions', () => {
  describe('HTTP actions', () => {
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
  });

  describe('Synchronous actions', () => {
    describe('StartQuiz', () => {
      it('has the correct type', () => {
        const action = StartQuiz();
        expect(action.type).toBe(EQuizActionType.StartQuiz);
      });
    });
    describe('EndQuiz', () => {
      it('has the correct type', () => {
        const action = EndQuiz();
        expect(action.type).toBe(EQuizActionType.EndQuiz);
      });
    });

    describe('IncrementCorrectAnswers', () => {
      it('has the correct type', () => {
        const action = IncrementCorrectAnswers();
        expect(action.type).toBe(EQuizActionType.IncrementCorrectAnswers);
      });
    });

    describe('IncrementIncorrectAnswers', () => {
      it('has the correct type', () => {
        const action = IncrementIncorrectAnswers();
        expect(action.type).toBe(EQuizActionType.IncrementIncorrectAnswers);
      });
    });

    describe('SetLevel', () => {
      it('has the correct type', () => {
        const action = SetLevel({ payload: { level: HARD } });
        expect(action.type).toBe(EQuizActionType.SetLevel);
      });
      it('has the correct payload', () => {
        const action = SetLevel({ payload: { level: HARD } });
        expect(action.payload).toEqual({ level: HARD });
      });
    });

    describe('ResetScores', () => {
      it('has the correct type', () => {
        const action = ResetScores();
        expect(action.type).toBe(EQuizActionType.ResetScores);
      });
    });
  });
});
