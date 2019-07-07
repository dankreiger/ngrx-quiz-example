import { Store, select } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { IAppState } from '@state/interfaces/AppState.interface';

import { selectQuizState } from '@state/selectors/quiz.selectors';
import { first, filter } from 'rxjs/operators';
import { IQuizState } from '@state/interfaces/QuizState.interface';
import { QuizService } from '@core/services/quiz.service';

@Injectable({ providedIn: 'root' })
export class QuizPageResolver implements Resolve<IQuizState> {
  constructor(
    private store: Store<IAppState>,
    private quizService: QuizService
  ) {}

  public resolve(): Observable<IQuizState> {
    this.initQuizData();
    return this.waitForQuizData();
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
          this.quizService.startQuiz();
        }
      });
  }
}
