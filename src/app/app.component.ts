import {
  Component,
  ChangeDetectionStrategy,
  OnDestroy,
  ChangeDetectorRef,
  HostBinding
} from '@angular/core';
import { selectQuizState } from '@state/selectors/quiz.selectors';
import { Subscription } from 'rxjs';
import { IQuizState } from '@state/interfaces/QuizState.interface';
import { IAppState } from '@state/interfaces/AppState.interface';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnDestroy {
  private _quizDataSubscription: Subscription;

  public quizLoading = false;
  public error: any;
  public confirmationVisible = false;

  constructor(
    private _store: Store<IAppState>,
    private _cdr: ChangeDetectorRef
  ) {
    this._quizDataSubscription = this._store
      .select(selectQuizState)
      .subscribe((state: IQuizState) => {
        this.quizLoading = state.questionLoading || state.answersLoading;
        this.error = state.error;
        this.confirmationVisible = state.confirmationModalOpen;
        this._cdr.markForCheck();
      });
  }
  @HostBinding('class.overlay') get overlay() {
    return this.confirmationVisible;
  }

  ngOnDestroy() {
    this._quizDataSubscription.unsubscribe();
  }
}
