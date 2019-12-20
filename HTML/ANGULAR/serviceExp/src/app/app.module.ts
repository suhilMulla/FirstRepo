import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { EmpNameComponent } from './emp-name/emp-name.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { EmployeeserviceService } from './employeeservice.service';
import { EmpBonusComponent } from './emp-bonus/emp-bonus.component';
import { GetBonusService } from './get-bonus.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EmpNameComponent,
    EmpDetailsComponent,
    EmpBonusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmployeeserviceService,GetBonusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
