import { ActionCreator } from '@ngrx/store';
import { EQuizActionType } from 'src/enums/QuizAction.enums';

export type QuizAction = ActionCreator<EQuizActionType, any>;
