import { Component, OnInit } from '@angular/core';
import { QuizService } from './services/quiz.service';
import { select, Store } from '@ngrx/store';
import { IAppState } from '@state/interfaces/AppState.interface';
import { Subscription } from 'rxjs';
import { IRandomQuestion } from '@state/interfaces/RandomQuestion.interface';
import { selectQuestion } from '@state/selectors/quiz.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private quizQuestionSubscription: Subscription;
  constructor(
    private store: Store<IAppState>,
    private quizService: QuizService
  ) {
    this.quizQuestionSubscription = store
      .pipe(select(selectQuestion))
      .subscribe((question: IRandomQuestion) => {
        console.log(question);
      });
  }
  public getNewQuestion(): void {
    this.quizService.getRandomQuestion();
  }
  ngOnInit() {}
}
