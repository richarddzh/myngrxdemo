import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as myReducer from '../my-reducer';
import * as myActions from '../my-actions';

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css'],
})
export class MyButtonComponent {
  constructor(
    private store: Store<myReducer.MyState>
  ) {}

  onClick() {
    this.store.dispatch(myActions.myButtonClick());
  }
}