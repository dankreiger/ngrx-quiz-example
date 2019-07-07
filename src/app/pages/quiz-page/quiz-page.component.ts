import {
  Component,
  ChangeDetectionStrategy,
  OnDestroy,
  ChangeDetectorRef
} from '@angular/core';
import { IRandomQuestion } from '@state/interfaces/RandomQuestion.interface';
import { enteringAnswerButtons } from './quiz-page.animations';
import { IQuizState } from '@state/interfaces/QuizState.interface';
import { IAnswer } from '@state/interfaces/Answer.interface';
import { QuizService } from '@core/services/quiz.service';
import { selectQuizState } from '@state/selectors/quiz.selectors';
import { IAppState } from '@state/interfaces/AppState.interface';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Level } from '@state/types/Level.types';
import { EASY, MEDIUM, HARD } from '@state/constants/quiz.constants';

export enum UserAnswerStatus {
  CORRECT = 'correct',
  INCORRECT = 'incorrect'
}

enum AnswerCount {
  EASY = 3,
  MEDIUM = 4
}
@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [enteringAnswerButtons]
})
export class QuizPageComponent implements OnDestroy {
  private _quizDataSubscription: Subscription;
  private _answers: IAnswer[];
  private _level: Level;
  private _question: IRandomQuestion;

  public currentUserAnswerStatus: UserAnswerStatus;

  constructor(
    private _quizService: QuizService,
    private _store: Store<IAppState>,
    private _cdr: ChangeDetectorRef
  ) {
    this._quizDataSubscription = this._store
      .select(selectQuizState)
      .subscribe((state: IQuizState) => {
        this.level = state.level;
        this.question = state.question;
        this.answers = state.answers;
        this._cdr.markForCheck();
      });
  }

  set question(question: IRandomQuestion) {
    this._question = question;
  }

  get question(): IRandomQuestion {
    return this._question;
  }

  set answers(answers: IAnswer[]) {
    let filteredAnswers: IAnswer[];
    const correctAnswer: IAnswer = answers.find(
      answer => answer && answer.id === this.question.answerId
    );
    switch (this.level) {
      /* shows 3 answers */
      case EASY:
        filteredAnswers = answers.slice(0, AnswerCount.EASY);
        break;
      /* shows 4 answers */
      case MEDIUM:
        filteredAnswers = answers.slice(0, AnswerCount.MEDIUM);
        break;
      /* shows all answers (hard) */
      default:
        filteredAnswers = answers;
        break;
    }

    if (!filteredAnswers.includes(correctAnswer)) {
      filteredAnswers.pop();
      filteredAnswers.push(correctAnswer);
    }

    this._answers = filteredAnswers;
  }

  get answers(): IAnswer[] {
    return this._answers;
  }

  set level(level: Level) {
    this._level = level;
  }

  get level(): Level {
    return this._level;
  }

  public fetchNewQuestion() {
    this._quizService.resetQuizData();
    this._quizService.getRandomQuestion();
  }

  public endQuiz() {
    this._quizService.endQuiz();
    this._quizService.resetScores();
  }

  public userAnswerStatus(status: UserAnswerStatus) {
    this.currentUserAnswerStatus = status;
  }

  ngOnDestroy() {
    this._quizDataSubscription.unsubscribe();
  }
}
