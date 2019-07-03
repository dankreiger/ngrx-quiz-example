import { ActionCreator } from '@ngrx/store';

/**
 * @description quiz redux actions
 */
export enum EQuizActionType {
  GetRandomQuestionBegin = '[Api Quiz] Get Questions Begin',
  GetRandomQuestionSuccess = '[Api Quiz] Get Questions Success',
  GetRandomQuestionFailure = '[Api Quiz] Get Questions Failure'
}
