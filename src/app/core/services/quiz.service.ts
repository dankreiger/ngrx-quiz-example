import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { IAppState } from '@state/interfaces/AppState.interface';

import * as QuizActions from '@state/actions/quiz.actions';
import { UserAnswerStatus } from '@pages/quiz-page/quiz-page.component';
import { Level } from '@state/types/Level.types';

@Injectable({ providedIn: 'root' })
export class QuizService {
  constructor(private _store: Store<IAppState>) {}

  public startQuiz(): void {
    this._store.dispatch(QuizActions.StartQuiz());
  }
  public getRandomQuestion(): void {
    this._store.dispatch(QuizActions.GetRandomQuestionBegin());
  }
  public endQuiz(): void {
    this._store.dispatch(QuizActions.EndQuiz());
  }

  public resetScores(): void {
    this._store.dispatch(QuizActions.ResetScores());
  }

  /* sets difficulty level */
  public setLevel(level: Level): void {
    this._store.dispatch(QuizActions.SetLevel({ payload: { level } }));
  }

  /* resets current quiz question and answers */
  public resetQuizData(): void {
    this._store.dispatch(QuizActions.ResetQuizData());
  }

  /* increments current user score */
  public logUserStats(stats: UserAnswerStatus): void {
    switch (stats) {
      case 'correct':
        this._store.dispatch(QuizActions.IncrementCorrectAnswers());
        break;
      case 'incorrect':
        this._store.dispatch(QuizActions.IncrementIncorrectAnswers());
        break;
      default:
        break;
    }
  }
}
