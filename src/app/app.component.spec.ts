import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { LayoutsModule } from '@layouts/layouts.module';
import { provideMockStore } from '@ngrx/store/testing';
import { quizReducerInitialState } from '@state/reducers/quiz.reducer';
import { ErrorComponent } from '@components/error/error.component';
import { LoadingComponent } from '@components/loading/loading.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, LayoutsModule],
      declarations: [AppComponent, LoadingComponent, ErrorComponent],
      providers: [provideMockStore({ initialState: quizReducerInitialState })]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
