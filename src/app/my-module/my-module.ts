import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { StoreModule } from "@ngrx/store";
import { MyButtonComponent } from './components/my-button.component';
import { MyResultComponent } from './components/my-result.component';
import { MySelector } from './my-selector';
import * as myReducer from './my-reducers';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(myReducer.myFeatureKey, myReducer.reducers),
  ],
  declarations: [
    MyButtonComponent,
    MyResultComponent,
  ],
  exports: [
    MyButtonComponent,
    MyResultComponent,
  ],
  providers: [
    MySelector
  ]
})
export class MyModule {}
