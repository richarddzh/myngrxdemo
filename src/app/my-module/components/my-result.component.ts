import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as myReducer from '../my-reducer';
import * as myActions from '../my-actions';

@Component({
  selector: 'app-my-result',
  templateUrl: './my-result.component.html',
  styleUrls: ['./my-result.component.css'],
})
export class MyResultComponent {
  constructor(
    private store: Store<myReducer.MyState>
  ) {}
}