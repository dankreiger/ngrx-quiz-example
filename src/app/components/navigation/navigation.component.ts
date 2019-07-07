import {
  Component,
  ChangeDetectorRef,
  OnDestroy,
  ChangeDetectionStrategy
} from '@angular/core';
import { IQuizState } from '@state/interfaces/QuizState.interface';
import { selectQuizState } from '@state/selectors/quiz.selectors';
import { IAppState } from '@state/interfaces/AppState.interface';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { EASY, MEDIUM, HARD } from '@state/constants/quiz.constants';
import { Level } from '@state/types/Level.types';
import { QuizService } from '@core/services/quiz.service';
import { NavigationDefault } from './navigation.default';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cmp-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent extends NavigationDefault
  implements OnDestroy {
  private _quizDataSubscription: Subscription;

  public levels = [EASY, MEDIUM, HARD];
  public currentLevel: Level;

  constructor(
    private _cdr: ChangeDetectorRef,
    private _store: Store<IAppState>,
    private _quizService: QuizService,
    private _router: Router
  ) {
    super();
    this._quizDataSubscription = this._store
      .select(selectQuizState)
      .subscribe((state: IQuizState) => {
        this.quizStarted = state.quizStarted;
        this.correctAnswerCount = state.correctAnswers;
        this.incorrectAnswerCount = state.incorrectAnswers;
        this.currentLevel = state.level;
        this._cdr.markForCheck();
      });
  }

  public setLevel(level: Level): void {
    this._quizService.setLevel(level);
  }

  public launchLeaveConfirmation(): void {
    this._quizService.launchConfirmation();
  }

  public goHome(): void {
    this._router.navigate(['/']);
    this._quizService.endQuiz();
    this._quizService.resetScores();
  }

  public goToScoreboard(): void {
    this._router.navigate(['/scoreboard-page']);
  }

  ngOnDestroy() {
    this._quizDataSubscription.unsubscribe();
  }
}
