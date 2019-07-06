import { Component, Input, OnInit } from '@angular/core';
import { IRandomQuestion } from '@state/interfaces/RandomQuestion.interface';
import { IAnswer } from '@state/interfaces/Answer.interface';
import { enteringAnswerButtons } from './quiz-card.animations';

@Component({
  selector: 'app-quiz-card',
  templateUrl: './quiz-card.component.html',
  styleUrls: ['./quiz-card.component.scss'],
  animations: [enteringAnswerButtons]
})
export class QuizCardComponent implements OnInit {
  @Input() question: IRandomQuestion;
  @Input() answers: IAnswer[];

  private currentUserAnswer: IAnswer;
  public userAnswered = false;
  public quizAnswerButtonsEntering = false;
  public userAnsweredCorrectly = false;
  public quizFeedback: string;

  private isCorrectAnswer(answer: IAnswer): boolean {
    return this.question.answerId === answer.id;
  }

  private isIncorrectAnswer(answer: IAnswer): boolean {
    return (
      this.currentUserAnswer.id === answer.id && !this.isCorrectAnswer(answer)
    );
  }

  /* sets button classes according to quiz state */
  public setBtnClasses(buttonAnswerData: IAnswer): string {
    const base = 'xng-btn xng-btn--inverted';
    if (this.userAnswered) {
      if (this.isCorrectAnswer(buttonAnswerData)) {
        return `${base} correct`;
      }
      if (this.isIncorrectAnswer(buttonAnswerData)) {
        return `${base} incorrect`;
      }
    }
    return `${base} xng-btn--inverted`;
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
    this.currentUserAnswer = answer;
    this.userAnswered = true;
    if (this.isCorrectAnswer(answer)) {
      this.quizFeedback = 'You are correct!';
    } else {
      this.quizFeedback = 'Sorry, that was wrong.';
    }
  }

  ngOnInit() {
    this.quizAnswerButtonsEntering = this.answers.length > 0;
  }
}
