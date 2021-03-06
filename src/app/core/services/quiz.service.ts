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

  public launchConfirmation(): void {
    this._store.dispatch(QuizActions.LaunchConfirmation());
  }

  public acceptConfirmation(): void {
    this._store.dispatch(QuizActions.AcceptConfirmation());
  }

  public closeConfirmation(): void {
    this._store.dispatch(QuizActions.CloseConfirmation());
  }

  public resetConfirmation(): void {
    this._store.dispatch(QuizActions.ResetConfirmation());
  }

  public startAnswerButtonsEntering(): void {
    this._store.dispatch(QuizActions.StartAnswerButtonsEntering());
  }

  public finishAnswerButtonsEntering(): void {
    this._store.dispatch(QuizActions.FinishAnswerButtonsEntering());
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
