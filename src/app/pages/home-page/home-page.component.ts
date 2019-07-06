import { Component, ChangeDetectionStrategy } from '@angular/core';
import { QuizService } from '@core/services/quiz.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent {
  public logoPath = '../../../assets/img/crossengage-logo-white.png';

  constructor(private quizService: QuizService) {}

  public getNewQuestion(): void {
    this.quizService.startQuiz();
  }
}
