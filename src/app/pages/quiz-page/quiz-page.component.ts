import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  OnDestroy,
  ViewChild
} from '@angular/core';
import { IRandomQuestion } from '@state/interfaces/RandomQuestion.interface';
import { ActivatedRoute } from '@angular/router';
import { enteringAnswerButtons } from './quiz-page.animations';
import { IQuizState } from '@state/interfaces/QuizState.interface';
import { IAnswer } from '@state/interfaces/Answer.interface';
import { QuizService } from '@core/services/quiz.service';
import { selectQuizState } from '@state/selectors/quiz.selectors';
import { IAppState } from '@state/interfaces/AppState.interface';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { QuizCardComponent } from '@components/quiz-card/quiz-card.component';

export enum UserAnswerStatus {
  CORRECT = 'correct',
  INCORRECT = 'incorrect'
}
@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [enteringAnswerButtons]
})
export class QuizPageComponent implements OnDestroy {
  private quizDataSubscription: Subscription;
  public quizPageData: IQuizState;
  public currentUserAnswerStatus: UserAnswerStatus;
  @ViewChild('quizCard', { static: false }) quizCard: QuizCardComponent;

  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService,
    private cdr: ChangeDetectorRef,
    private store: Store<IAppState>
  ) {
    this.quizDataSubscription = this.store
      .select(selectQuizState)
      .subscribe((state: IQuizState) => {
        this.quizPageData = state;
      });
  }

  get question(): IRandomQuestion {
    return this.quizPageData.question;
  }

  get answers(): IAnswer[] {
    return this.quizPageData.answers;
  }

  fetchNewQuestion() {
    this.quizService.logUserStats(this.currentUserAnswerStatus);
    this.quizService.resetQuizData();
    this.quizService.getRandomQuestion();
  }

  endQuiz() {
    this.quizService.endQuiz();
  }

  public userAnswerStatus(status: UserAnswerStatus) {
    this.currentUserAnswerStatus = status;
  }
  ngOnDestroy() {
    this.quizDataSubscription.unsubscribe();
  }
}
