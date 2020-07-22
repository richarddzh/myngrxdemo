import { createAction, props } from '@ngrx/store';

export const myButtonClick = createAction('[my] button click');
export const myQueryReturn = createAction('[my] query return',
  props<{ result: string[] }>());
