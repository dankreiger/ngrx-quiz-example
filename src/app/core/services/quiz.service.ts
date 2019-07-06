import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { IAppState } from '@state/interfaces/AppState.interface';

import * as QuizActions from '@state/actions/quiz.actions';

@Injectable({ providedIn: 'root' })
export class QuizService {
  constructor(private store: Store<IAppState>) {}

  public startQuiz(): void {
    this.store.dispatch(QuizActions.StartQuiz());
  }
  public getRandomQuestion(): void {
    this.store.dispatch(QuizActions.GetRandomQuestionBegin());
  }
}
