import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { IRandomQuestion } from '@state/interfaces/RandomQuestion.interface';
import { ActivatedRoute } from '@angular/router';
import { enteringAnswerButtons } from './quiz-page.animations';
import { IQuizState } from '@state/interfaces/QuizState.interface';
import { IAnswer } from '@state/interfaces/Answer.interface';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [enteringAnswerButtons]
})
export class QuizPageComponent implements OnInit {
  private quizPageData: IQuizState;
  public quizAnswerButtonsEntering: boolean;

  constructor(private route: ActivatedRoute) {}

  get question(): IRandomQuestion {
    return this.quizPageData.question;
  }

  get answers(): IAnswer[] {
    return this.quizPageData.answers;
  }

  ngOnInit() {
    this.quizPageData = this.route.snapshot.data.quizPageData;
    if (this.answers.length) {
      this.quizAnswerButtonsEntering = true;
    }
  }
}
