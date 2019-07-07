import { IAnswer } from '@state/interfaces/Answer.interface';
import { Input, Output, EventEmitter } from '@angular/core';
import { IRandomQuestion } from '@state/interfaces/RandomQuestion.interface';
import { UserAnswerStatus } from '@pages/quiz-page/quiz-page.component';

/* card base setup and helper functions */
export abstract class QuizCardDefault {
  @Input() question: IRandomQuestion;
  @Input() answers: IAnswer[];
  @Output() emitUserStatus = new EventEmitter<UserAnswerStatus>();
  public currentUserAnswer: IAnswer;
  public userAnswered: boolean;
  public quizFeedback: string;
  public newAnswersInitializing = false;

  protected isCorrectAnswer(answer: IAnswer): boolean {
    return this.question.answerId === answer.id;
  }

  protected isIncorrectAnswer(answer: IAnswer): boolean {
    return (
      this.currentUserAnswer.id === answer.id && !this.isCorrectAnswer(answer)
    );
  }

  /* sets button classes according to quiz state */
  protected setBtnClasses(buttonAnswerData: IAnswer): string {
    const base = 'xng-btn xng-btn--primary';
    if (this.userAnswered) {
      if (this.isCorrectAnswer(buttonAnswerData)) {
        return `${base} correct`;
      }
      if (this.isIncorrectAnswer(buttonAnswerData)) {
        return `${base} incorrect`;
      }
    }
    return base;
  }

  /* trackByFn for answer list for performance */
  public answerId(index: number, answer: IAnswer) {
    return answer ? answer.id : `button-${index}`;
  }

  /* allow buttons to be clicked when enter animation is complete */
  public setStaggerDone(): void {
    this.newAnswersInitializing = false;
  }
}
