import { Action, createReducer, on } from '@ngrx/store';
import { myButtonClick, myQueryReturn } from './my-actions';

export const mySliceKey = 'myslice';

export interface MySliceState {
  clickCount: number;
  queryResult: string[];
};

export const initialState: MySliceState = {
  clickCount: 0,
  queryResult: [],
};

const myReducer = createReducer(
  initialState,
  on(myButtonClick, state => {
    return {
      ...state,
      clickCount: state.clickCount + 1,
      queryResult: ['pending...'],
    };
  }),
  on(myQueryReturn, (state, {result}) => {
    return {
      ...state,
      queryResult: result,
    };
  })
);

export function reducer(state: MySliceState | undefined, action: Action) {
  return myReducer(state, action);
}