import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SLK';
  City='Bangalore';
  State='Karnataka';
  Country='India';

  studentNames=['Adithya', 'Chandan', 'Prajwal'];
  currentNames='';

  add()
  {
  	this.studentNames.push(this.currentNames);
  }

  
}
