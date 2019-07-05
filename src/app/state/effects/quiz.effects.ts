import { Injectable } from '@angular/core';
import { ofType, Actions, createEffect } from '@ngrx/effects';
import { map, catchError, exhaustMap, concatMap } from 'rxjs/operators';
import { ApiService } from '@services/api.service';
import * as QuizActions from '@state/actions/quiz.actions';
import { of } from 'rxjs';
import { QuizAction } from '@state/types/QuizAction.types';
import { EQuizActionType } from '@state/enums/QuizAction.enums';
import { getRandomQuestionPath, getAnswersPath } from '../constants';
import { IRandomQuestion } from '../interfaces/RandomQuestion.interface';
import { HttpParams } from '@angular/common/http';
import { IAnswer } from '@state/interfaces/Answer.interface';

@Injectable()
export class QuizEffects {
  getRandomQuestion$ = createEffect(() =>
    this.actions$.pipe(
      ofType<QuizAction>(EQuizActionType.GetRandomQuestionBegin),
      exhaustMap(() =>
        this.apiService.get(getRandomQuestionPath).pipe(
          concatMap((
            question: IRandomQuestion // interface for question
          ) => [
            QuizActions.GetRandomQuestionSuccess({
              payload: { question }
            }),
            QuizActions.GetAnswersBegin()
          ]),
          catchError(error =>
            of(QuizActions.GetRandomQuestionFailure({ payload: { error } }))
          )
        )
      )
    )
  );

  /* TODO: setup redux actions for answers */
  getAnswers$ = createEffect(() =>
    this.actions$.pipe(
      ofType<QuizAction>(EQuizActionType.GetAnswersBegin),
      exhaustMap(res => {
        console.log(res);
        const { category } = res.question;
        if (category) {
          return this.apiService
            .get(getAnswersPath, new HttpParams().append('cat', category))
            .pipe(
              concatMap((answers: IAnswer[]) => [
                QuizActions.GetAnswersSuccess({
                  payload: { answers }
                })
              ]),
              catchError(error =>
                of(QuizActions.GetAnswersFailure({ payload: { error } }))
              )
            );
        } else {
          return;
        }
      })
    )
  );

  constructor(private actions$: Actions, private apiService: ApiService) {}
}
