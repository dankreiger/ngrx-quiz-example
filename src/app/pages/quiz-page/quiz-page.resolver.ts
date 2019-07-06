import { Store, select } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { IAppState } from '@state/interfaces/AppState.interface';

import {
  selectQuestion,
  selectQuizState
} from '@state/selectors/quiz.selectors';
import { IRandomQuestion } from '@state/interfaces/RandomQuestion.interface';
import { map, first, filter } from 'rxjs/operators';
import { StartQuizAutomatically } from '@state/actions/quiz.actions';
import { IAnswer } from '@state/interfaces/Answer.interface';
import { IQuizState } from '@state/interfaces/QuizState.interface';

@Injectable({ providedIn: 'root' })
export class QuizPageResolver implements Resolve<IQuizState> {
  constructor(private store: Store<IAppState>) {}

  public resolve(): Observable<IQuizState> {
    this.initQuizData();

    return this.waitForQuizData();
  }

  private waitForQuestionData(): Observable<IRandomQuestion> {
    return this.store.select(selectQuestion).pipe(
      map((question: IRandomQuestion) => question),
      filter(question => !!question),
      first()
    );
  }

  private waitForQuizData(): Observable<IQuizState> {
    return this.store.select(selectQuizState).pipe(
      filter(
        (state: IQuizState) =>
          state.question && state.answers && state.answers.length > 0
      ),
      first()
    );
  }

  /* first() triggers dispose handlers, which make unsubscribing unnecessary */
  private initQuizData(): void {
    this.store
      .select(selectQuizState)
      .pipe(first())
      .subscribe((state: IQuizState) => {
        if (!state || !state.question || !state.answers) {
          this.store.dispatch(StartQuizAutomatically());
        }
      });
  }
}
