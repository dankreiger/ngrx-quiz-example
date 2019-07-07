import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundPageComponent } from './not-found-page.component';
import { provideMockStore } from '@ngrx/store/testing';
import { quizReducerInitialState } from '@state/reducers/quiz.reducer';
import { RouterTestingModule } from '@angular/router/testing';

describe('NotFoundPageComponent', () => {
  let component: NotFoundPageComponent;
  let fixture: ComponentFixture<NotFoundPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [NotFoundPageComponent],
      providers: [
        provideMockStore({
          initialState: { quizReducer: quizReducerInitialState }
        })
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
