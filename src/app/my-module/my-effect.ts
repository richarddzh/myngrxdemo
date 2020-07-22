import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { mergeMap, map } from 'rxjs/operators';
import { MyFakeHttpService } from './my-fake-http.service';
import * as myReducer from './my-reducers';
import * as myActions from './my-actions';

@Injectable()
export class MyEffect {
  constructor(
    private actions$: Actions,
    private myFakeHttpService: MyFakeHttpService,
    private store: Store<myReducer.MyState>
  ) {}

  runQuery$ = createEffect(() => this.actions$.pipe(
    ofType(myActions.myButtonClick),
    mergeMap(_ => this.myFakeHttpService.getQueryResult().pipe(
      map(x => myActions.myQueryReturn({ result: x }))
    ))
  ));
}