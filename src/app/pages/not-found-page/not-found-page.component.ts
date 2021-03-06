import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '@core/services/quiz.service';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotFoundPageComponent {
  constructor(private _router: Router, private _quizService: QuizService) {}

  public goHome() {
    this._router.navigate(['/']);
    this._quizService.endQuiz();
    this._quizService.resetScores();
  }
  public goToQuiz() {
    this._router.navigate(['/quiz-page']);
  }
}
