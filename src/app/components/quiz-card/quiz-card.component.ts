import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ChangeDetectorRef
} from '@angular/core';
import { IRandomQuestion } from '@state/interfaces/RandomQuestion.interface';
import { IAnswer } from '@state/interfaces/Answer.interface';
import { enteringAnswerButtons } from './quiz-card.animations';
import { UserAnswerStatus } from '@pages/quiz-page/quiz-page.component';

interface QuizSession {
  currentUserAnswer: IAnswer;
  userAnswered: boolean;
  quizFeedback: string;
}
@Component({
  selector: 'app-quiz-card',
  templateUrl: './quiz-card.component.html',
  styleUrls: ['./quiz-card.component.scss'],
  animations: [enteringAnswerButtons],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuizCardComponent implements OnInit {
  private currentQuizSessionWritable: QuizSession;
  public quizAnswerButtonsEntering = false;

  @Input() question: IRandomQuestion;

  @Input() answers: IAnswer[];
  @Output() emitUserStatus = new EventEmitter<UserAnswerStatus>();

  private isCorrectAnswer(answer: IAnswer): boolean {
    return this.question.answerId === answer.id;
  }

  private isIncorrectAnswer(answer: IAnswer): boolean {
    return (
      this.currentUserAnswer.id === answer.id && !this.isCorrectAnswer(answer)
    );
  }

  set currentQuizSession(data) {
    this.currentQuizSessionWritable = { ...this.currentQuizSession, ...data };
  }
  get currentQuizSession(): QuizSession {
    return this.currentQuizSessionWritable;
  }
  get currentUserAnswer(): IAnswer {
    return this.currentQuizSession.currentUserAnswer;
  }
  get userAnswered(): boolean {
    return this.currentQuizSession.userAnswered;
  }
  get quizFeedback(): string {
    return this.currentQuizSession.quizFeedback;
  }

  /* sets button classes according to quiz state */
  public setBtnClasses(buttonAnswerData: IAnswer): string {
    const base = 'xng-btn xng-btn--inverted';
    if (this.currentQuizSession.userAnswered) {
      if (this.isCorrectAnswer(buttonAnswerData)) {
        return `${base} correct`;
      }
      if (this.isIncorrectAnswer(buttonAnswerData)) {
        return `${base} incorrect`;
      }
    }
    return base;
  }

  /* trackByFn for answer list (performance) */
  public answerId(index: number, answer: IAnswer) {
    return answer ? answer.id : `button-${index}`;
  }

  /* allow buttons to be clicked when enter animation is complete */
  public setStaggerDone(): void {
    this.quizAnswerButtonsEntering = false;
  }

  public selectAnswer(answer: IAnswer) {
    this.currentQuizSession.currentUserAnswer = answer;
    this.currentQuizSession.userAnswered = true;
    if (this.isCorrectAnswer(answer)) {
      this.currentQuizSession.quizFeedback = 'You are correct!';
      this.emitUserStatus.emit(UserAnswerStatus.CORRECT);
    } else {
      this.currentQuizSession.quizFeedback = 'Sorry, that was wrong.';
      this.emitUserStatus.emit(UserAnswerStatus.INCORRECT);
    }
    this.cdr.markForCheck();
  }

  ngOnInit() {
    this.quizAnswerButtonsEntering = this.answers.length > 0;
    this.currentQuizSession = {
      currentUserAnswer: null,
      userAnswered: false,
      quizFeedback: null
    };
  }
  constructor(private cdr: ChangeDetectorRef) {}
}
