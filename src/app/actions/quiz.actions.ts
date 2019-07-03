import { createAction, props } from '@ngrx/store';
import { EQuizActionType } from 'src/enums/QuizAction.enums';
import { IRandomQuestion } from '../interfaces/RandomQuestion.interface';

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
