import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { IAppState } from '@state/interfaces/AppState.interface';

import * as QuizActions from '@state/actions/quiz.actions';
import { UserAnswerStatus } from '@pages/quiz-page/quiz-page.component';

@Injectable({ providedIn: 'root' })
export class QuizService {
  constructor(private store: Store<IAppState>) {}

  public startQuiz(): void {
    this.store.dispatch(QuizActions.StartQuiz());
  }
  public getRandomQuestion(): void {
    this.store.dispatch(QuizActions.GetRandomQuestionBegin());
  }
  public endQuiz(): void {
    this.store.dispatch(QuizActions.EndQuiz());
  }

  public resetQuizData(): void {
    this.store.dispatch(QuizActions.ResetQuizData());
  }

  public logUserStats(stats: UserAnswerStatus): void {
    switch (stats) {
      case 'correct':
        this.store.dispatch(QuizActions.IncrementCorrectAnswers());
        break;
      case 'incorrect':
        this.store.dispatch(QuizActions.IncrementIncorrectAnswers());
        break;
      default:
        break;
    }
  }
}
