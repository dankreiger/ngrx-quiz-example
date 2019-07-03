import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { cold, hot } from 'jasmine-marbles';

import { QuizEffects } from './quiz.effects';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { Type } from '@angular/core';
import {
  GetRandomQuestionBegin,
  GetRandomQuestionSuccess
} from '../actions/quiz.actions';

describe('QuizEffects', () => {
  let actions$: Observable<any>;
  let effects: QuizEffects;
  let httpMock: HttpTestingController;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [QuizEffects, provideMockActions(() => actions$), HttpClient]
    });

    effects = TestBed.get(QuizEffects);
  });

  describe('getRandomQuestion$', () => {
    beforeEach(() => {
      http = TestBed.get(HttpClient);
      httpMock = TestBed.get(HttpTestingController as Type<
        HttpTestingController
      >);
    });
    it('creates successfully', () => {
      console.log('TODO: WRITE EFFECTS SPEC');
      expect(effects).toBeTruthy();
    });

    it(`gets triggered by GetRandomQuestionBegin action and completes upon successful GET request with GetRandomQuestionSuccess`, () => {
      console.log(
        'TODO: WRITE MARBLE TESTING SPEC: https://ngrx.io/guide/effects/testing'
      );
      // const action = GetRandomQuestionBegin();
      // const completion = GetRandomQuestionSuccess({
      //   payload: { question [] }
      // });

      // actions$ = hot('^', { a: action });
      // const expected = cold('|', { b: completion });
      // expect(effects.getRandomQuestion$).toBeObservable();
    });

    afterEach(() => {
      httpMock.verify();
    });
  });
});
