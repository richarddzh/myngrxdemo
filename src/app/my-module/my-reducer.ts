import { ActionReducerMap } from '@ngrx/store';
import * as mySliceReducer from './my-slice-reducer';

export const myFeatureKey = 'my';

export interface MyState {
  [mySliceReducer.mySliceKey]?: mySliceReducer.MySliceState;
};

export const reducers: ActionReducerMap<MyState> = {};
reducers[mySliceReducer.mySliceKey] = mySliceReducer.reducer;
