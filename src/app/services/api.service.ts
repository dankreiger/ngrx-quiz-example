import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ApiPath } from '../types/ApiPath.types';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private http: HttpClient) {}

  private formatErrors(error: any) {
    return throwError(error.error);
  }

  get(
    apiPath: ApiPath,
    params: HttpParams = new HttpParams()
  ): Observable<any> {
    return this.http
      .get(apiPath, { params })
      .pipe(catchError(this.formatErrors));
  }
}
