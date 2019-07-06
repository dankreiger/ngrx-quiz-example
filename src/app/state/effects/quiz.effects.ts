import { Injectable } from '@angular/core';
import { ofType, Actions, createEffect } from '@ngrx/effects';
import {
  catchError,
  exhaustMap,
  concatMap,
  withLatestFrom,
  map
} from 'rxjs/operators';
import { ApiService } from '@core/services/api.service';
import * as QuizActions from '@state/actions/quiz.actions';
import { of } from 'rxjs';
import { QuizAction } from '@state/types/QuizAction.types';
import { EQuizActionType } from '@state/enums/QuizAction.enums';
import { getRandomQuestionPath, getAnswersPath } from '../constants';
import { IRandomQuestion } from '../interfaces/RandomQuestion.interface';
import { HttpParams } from '@angular/common/http';
import { IAnswer } from '@state/interfaces/Answer.interface';
import { IAppState } from '@state/interfaces/AppState.interface';
import { Store } from '@ngrx/store';
import { selectQuestion } from '@state/selectors/quiz.selectors';

@Injectable()
export class QuizEffects {
  getRandomQuestionBegin$ = createEffect(() =>
    this.actions$.pipe(
      ofType<QuizAction>(
        EQuizActionType.StartQuiz,
        EQuizActionType.StartQuizAutomatically
      ),
      map(() => QuizActions.GetRandomQuestionBegin())
    )
  );
  getRandomQuestion$ = createEffect(() =>
    this.actions$.pipe(
      ofType<QuizAction>(EQuizActionType.GetRandomQuestionBegin),
      exhaustMap(() =>
        this.apiService.get(getRandomQuestionPath).pipe(
          concatMap((question: IRandomQuestion) => [
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
      withLatestFrom(this.store$.select(selectQuestion)),
      exhaustMap(([action, question]) => {
        return this.apiService
          .get(
            getAnswersPath,
            new HttpParams().append('cat', question.category)
          )
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
      })
    )
  );

  constructor(
    private actions$: Actions,
    private store$: Store<IAppState>,
    private apiService: ApiService
  ) {}
}
