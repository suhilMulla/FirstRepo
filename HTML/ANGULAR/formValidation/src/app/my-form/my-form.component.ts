import { Component, OnInit } from '@angular/core';
import {User} from 'src/app/user';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {


	topics=['Java','HTML','CSS','JavaScript'];

 	 userModel=new User('','suhil@gmail.com',1234567890,'','morning',true,'1234','1234');

  constructor() { }

  ngOnInit() {
  }

}
