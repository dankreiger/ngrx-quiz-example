import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Type } from '@angular/core';
import { BaseApiUrlInterceptor } from './baseApiUrl.interceptor';
import { environment } from 'src/environments/environment.prod';
import { getRandomQuestion, getAnswers } from '../constants';
import { GetAnswers, GetRandomQuestion } from '../types/ApiPath.types';
import { BaseApiUrl } from '../types/BaseApiUrl.types';

describe('BaseApiUrl Interceptor', () => {
  let httpMock: HttpTestingController;
  let http: HttpClient;

  const { baseApiUrl }: { baseApiUrl: BaseApiUrl } = environment;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        HttpClient,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: BaseApiUrlInterceptor,
          multi: true
        }
      ]
    });

    http = TestBed.get(HttpClient);
    httpMock = TestBed.get(HttpTestingController as Type<
      HttpTestingController
    >);
  });

  describe('base url', () => {
    it('prepends the base url get random question path and returns the full api url', done => {
      // given
      const testBaseApiUrl: BaseApiUrl = baseApiUrl;
      const testGetRandomQuestion: GetRandomQuestion = getRandomQuestion;

      // when
      http.get(testGetRandomQuestion).subscribe(response => {
        expect(response).toBeTruthy();
        done();
      });

      const expectedUrl = `${testBaseApiUrl}${testGetRandomQuestion}`;

      // then
      const httpRequest = httpMock.expectOne(expectedUrl);
      expect(httpRequest.request.url).toBe(expectedUrl);

      httpRequest.flush({});
    });

    it('prepends the base url to get answers path the full api url', done => {
      // given
      const testBaseApiUrl: BaseApiUrl = baseApiUrl;
      const testGetAnswers: GetAnswers = getAnswers;

      // when
      http.get(testGetAnswers).subscribe(response => {
        expect(response).toBeTruthy();
        done();
      });

      const expectedUrl = `${testBaseApiUrl}${testGetAnswers}`;

      //then
      const httpRequest = httpMock.expectOne(expectedUrl);
      expect(httpRequest.request.url).toBe(expectedUrl);

      httpRequest.flush({});
    });
  });

  afterEach(() => {
    httpMock.verify();
  });
});
