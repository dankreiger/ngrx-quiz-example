import { Injectable } from '@angular/core';
import { ofType, Actions, createEffect } from '@ngrx/effects';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { ApiService } from '../services/api.service';
import * as QuizActions from '../actions/quiz.actions';
import { of } from 'rxjs';
import { QuizAction } from '../types/QuizAction.types';
import { EQuizActionType } from 'src/enums/QuizAction.enums';
import { getRandomQuestionPath } from '../constants';
import { IRandomQuestion } from '../interfaces/RandomQuestion.interface';

@Injectable()
export class QuizEffects {
  getRandomQuestion$ = createEffect(() =>
    this.actions$.pipe(
      ofType<QuizAction>(EQuizActionType.GetRandomQuestionBegin),
      exhaustMap(() =>
        this.apiService.get(getRandomQuestionPath).pipe(
          map((
            question: IRandomQuestion // interface for question
          ) =>
            QuizActions.GetRandomQuestionSuccess({
              payload: { question }
            })
          ),
          catchError(error =>
            of(QuizActions.GetRandomQuestionFailure({ payload: { error } }))
          )
        )
      )
    )
  );

  constructor(private actions$: Actions, private apiService: ApiService) {}
}
