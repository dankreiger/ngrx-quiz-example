import { createAction, props } from '@ngrx/store';
import { EQuizActionType } from '@state/enums/QuizAction.enums';
import { IRandomQuestion } from '@state/interfaces/RandomQuestion.interface';
import { IAnswer } from '@state/interfaces/Answer.interface';

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
