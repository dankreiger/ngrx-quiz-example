import { ActionCreator } from '@ngrx/store';
import { EQuizActionType } from '@state/enums/QuizAction.enums';

export type QuizAction = ActionCreator<EQuizActionType, any>;
