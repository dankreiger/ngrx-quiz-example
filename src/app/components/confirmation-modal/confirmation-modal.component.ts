import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '@core/services/quiz.service';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmationModalComponent {
  constructor(private _router: Router, private _quizService: QuizService) {}

  public confirm() {
    this._router.navigate(['/']);
    this._quizService.endQuiz();
    this._quizService.resetScores();
    this._quizService.closeConfirmation();
    this._quizService.resetConfirmation();
  }
  public reject() {
    this._quizService.closeConfirmation();
  }
}
