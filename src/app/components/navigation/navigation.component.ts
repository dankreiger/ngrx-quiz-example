import {
  Component,
  Input,
  ChangeDetectorRef,
  OnDestroy,
  ChangeDetectionStrategy
} from '@angular/core';
import { INavigationData } from './navigation.interfaces';
import { IQuizState } from '@state/interfaces/QuizState.interface';
import { selectQuizState } from '@state/selectors/quiz.selectors';
import { IAppState } from '@state/interfaces/AppState.interface';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cmp-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent implements OnDestroy {
  private quizDataSubscription: Subscription;
  private navData: INavigationData;

  public incorrectAnswerCount: number;
  public correctAnswerCount: number;
  public quizStarted: boolean;

  public hasDivider = false;

  constructor(private cdr: ChangeDetectorRef, private store: Store<IAppState>) {
    this.quizDataSubscription = this.store
      .select(selectQuizState)
      .subscribe((state: IQuizState) => {
        this.quizStarted = state.quizStarted;
        this.correctAnswerCount = state.correctAnswers;
        this.incorrectAnswerCount = state.incorrectAnswers;
        this.cdr.markForCheck();
      });
  }

  @Input() set navigationData(data: INavigationData) {
    if (data.outlineStyle === 'border') {
      this.hasDivider = true;
    }
    this.navData = data;
  }

  get navigationData(): INavigationData {
    return this.navData;
  }

  ngOnDestroy() {
    this.quizDataSubscription.unsubscribe();
  }
}
