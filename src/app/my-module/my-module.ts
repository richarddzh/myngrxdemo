import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from '@ngrx/effects';
import { MyButtonComponent } from './components/my-button.component';
import { MyResultComponent } from './components/my-result.component';
import { MySelector } from './my-selector';
import { MyEffect } from './my-effect';
import { MyFakeHttpService } from './my-fake-http.service';
import * as myReducer from './my-reducers';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(myReducer.myFeatureKey, myReducer.reducers),
    EffectsModule.forFeature([MyEffect]),
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
    MySelector,
    MyFakeHttpService,
  ]
})
export class MyModule {}
