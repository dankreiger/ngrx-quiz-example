import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { IAppState } from '../interfaces/AppState.interface';

import * as QuizActions from './../actions/quiz.actions';

@Injectable({ providedIn: 'root' })
export class QuizService {
  constructor(private store: Store<IAppState>) {}

  getRandomQuestion() {
    this.store.dispatch(QuizActions.GetRandomQuestionBegin());
  }
}
