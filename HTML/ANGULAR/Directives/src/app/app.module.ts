import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { NgIfExpComponent } from './ng-if-exp/ng-if-exp.component';
import { NgSwitchExpComponent } from './ng-switch-exp/ng-switch-exp.component';

@NgModule({
  declarations: [
    AppComponent,
    NgIfExpComponent,
    NgSwitchExpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
