import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch-exp',
  templateUrl: './ng-switch-exp.component.html',
  styleUrls: ['./ng-switch-exp.component.css']
})
export class NgSwitchExpComponent implements OnInit {

	items: item=[{name: 'Bangalore', value: 1},{name: 'Goa', value: 2},{name: 'Mumbai', value:3}];
	selectedValue: string='Bangalore';

  constructor() { }

  ngOnInit() {
  }
}
  class item
  {
  	name: string;
  	value: number;
  }


