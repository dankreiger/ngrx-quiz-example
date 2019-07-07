import { createAction, props } from '@ngrx/store';
import { EQuizActionType } from '@state/enums/QuizAction.enums';
import { IRandomQuestion } from '@state/interfaces/RandomQuestion.interface';
import { IAnswer } from '@state/interfaces/Answer.interface';
import { Level } from '@state/types/Level.types';

/**
 * TODO: split questions and answers into separate actions files
 * (there are too many actions here)
 */

/* http actions */
export const GetRandomQuestionBegin = createAction(
  EQuizActionType.GetRandomQuestionBegin
);

export const GetRandomQuestionSuccess = createAction(
  EQuizActionType.GetRandomQuestionSuccess,
  props<{ payload: { question: IRandomQuestion } }>()
);

export const GetRandomQuestionFailure = createAction(
  EQuizActionType.GetRandomQuestionFailure,
  props<{ payload: { error: any } }>()
);

export const GetAnswersBegin = createAction(EQuizActionType.GetAnswersBegin);

export const GetAnswersSuccess = createAction(
  EQuizActionType.GetAnswersSuccess,
  props<{ payload: { answers: IAnswer[] } }>()
);

export const GetAnswersFailure = createAction(
  EQuizActionType.GetAnswersFailure,
  props<{ payload: { error: any } }>()
);

/* synchronous actions */

export const StartQuiz = createAction(EQuizActionType.StartQuiz);
export const EndQuiz = createAction(EQuizActionType.EndQuiz);
export const ResetQuizData = createAction(EQuizActionType.ResetQuizData);

export const IncrementCorrectAnswers = createAction(
  EQuizActionType.IncrementCorrectAnswers
);

export const IncrementIncorrectAnswers = createAction(
  EQuizActionType.IncrementIncorrectAnswers
);

export const ResetScores = createAction(EQuizActionType.ResetScores);

export const SetLevel = createAction(
  EQuizActionType.SetLevel,
  props<{ payload: { level: Level } }>()
);
