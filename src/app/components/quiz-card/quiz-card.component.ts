import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ChangeDetectorRef
} from '@angular/core';
import { IAnswer } from '@state/interfaces/Answer.interface';
import { enteringAnswerButtons } from './quiz-card.animations';
import { UserAnswerStatus } from '@pages/quiz-page/quiz-page.component';
import { QuizCardDefault } from './quiz-card.default';
import { QuizService } from '@core/services/quiz.service';

@Component({
  selector: 'app-quiz-card',
  templateUrl: './quiz-card.component.html',
  styleUrls: ['./quiz-card.component.scss'],
  animations: [enteringAnswerButtons],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuizCardComponent extends QuizCardDefault implements OnInit {
  constructor(
    private _cdr: ChangeDetectorRef,
    private _quizService: QuizService
  ) {
    super();
  }

  public selectAnswer(answer: IAnswer) {
    this.currentUserAnswer = answer;
    this.userAnswered = true;
    if (this.isCorrectAnswer(answer)) {
      this.quizFeedback = 'You are correct!';
      this.emitUserStatus.emit(UserAnswerStatus.CORRECT);
      this._quizService.logUserStats(UserAnswerStatus.CORRECT);
    } else {
      this.quizFeedback = 'Sorry, that was wrong.';
      this.emitUserStatus.emit(UserAnswerStatus.INCORRECT);
      this._quizService.logUserStats(UserAnswerStatus.INCORRECT);
    }

    this._cdr.markForCheck();
  }

  ngOnInit() {
    this.newAnswersInitializing = this.answers.length > 0;
    this.currentUserAnswer = null;
    this.userAnswered = false;
    this.quizFeedback = null;
  }
}
