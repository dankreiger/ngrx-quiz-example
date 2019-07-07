import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ApiPath } from '@state/types/ApiPath.types';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private _http: HttpClient) {}

  private _formatErrors(error: any): Observable<never> {
    return throwError(error.error);
  }

  public get(
    apiPath: ApiPath,
    params: HttpParams = new HttpParams()
  ): Observable<any> {
    return this._http
      .get<ApiPath>(apiPath, { params })
      .pipe(catchError(this._formatErrors));
  }
}
