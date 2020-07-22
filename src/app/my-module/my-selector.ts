import { Injectable } from '@angular/core';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as myReducers from './my-reducers';
import * as mySliceReduer from './my-slice-reducer';

@Injectable()
export class MySelector {
  private myStateSelector =
    createFeatureSelector<myReducers.MyState>(myReducers.myFeatureKey);
  private mySliceStateSelector = createSelector(
    this.myStateSelector,
    state => state[mySliceReduer.mySliceKey]
  );

  clickCount = createSelector(
    this.mySliceStateSelector,
    state => state.clickCount
  );

  queryResult = createSelector(
    this.mySliceStateSelector,
    state => state.queryResult
  );

  queryResultString = createSelector(
    this.queryResult,
    result => (result || []).join(',')
  );
}
