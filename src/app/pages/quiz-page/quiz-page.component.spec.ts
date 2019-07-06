import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizPageComponent } from './quiz-page.component';
import { provideMockStore } from '@ngrx/store/testing';
import { quizReducerInitialState } from '@state/reducers/quiz.reducer';
import { RouterTestingModule } from '@angular/router/testing';

describe('QuizPageComponent', () => {
  let component: QuizPageComponent;
  let fixture: ComponentFixture<QuizPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [QuizPageComponent],
      providers: [
        provideMockStore({
          initialState: { quizReducer: quizReducerInitialState }
        })
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
