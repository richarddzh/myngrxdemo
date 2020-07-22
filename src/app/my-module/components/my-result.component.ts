import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { MySelector } from '../my-selector';
import * as myReducer from '../my-reducers';
import * as myActions from '../my-actions';

@Component({
  selector: 'app-my-result',
  templateUrl: './my-result.component.html',
  styleUrls: ['./my-result.component.css'],
})
export class MyResultComponent implements OnInit {
  clickCount$: Observable<number>;

  constructor(
    private store: Store<myReducer.MyState>,
    private mySelector: MySelector
  ) {}

  ngOnInit() {
    this.clickCount$ = this.store.pipe(select(this.mySelector.clickCount));
  }
}