import { Component } from '@angular/core';
import {User} from './user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formValidation';

  topics=['Java','HTML','CSS','JavaScript'];

  userModel=new User('Suhil','suhil@gmail.com',1234567890,'','morning',true,'1234','1234');
}
