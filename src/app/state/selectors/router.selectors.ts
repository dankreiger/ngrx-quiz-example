import { getSelectors, RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector } from '@ngrx/store';
import { IAppState } from '@state/interfaces/AppState.interface';

export const selectRouter = createFeatureSelector<
  IAppState,
  RouterReducerState<any>
>('routerReducer');

export const {
  selectQueryParams, // select the current route query params
  selectRouteParams, // select the current route params
  selectRouteData, // select the current route data
  selectUrl // select the current url
} = getSelectors(selectRouter);
