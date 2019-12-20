import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h2>{{name}}</h2>
  <h2>{{name | lowercase}}</h2>
  <h2>{{name | Uppercase}</h2>
  <h2>{{message | titlecase}}</h2>
  <h2>{{message | slice:2:4}}</h2>
  <h2>{{5.16478 | number:'1.2-3'}}</h2>
  <h2>{{5.16478 | number:'2.1-2'}}</h2>
  <h2>{{9.5467 | currency:'INR'}}</h2>
  <h2>{{date | date:short}}</h2>
  <h2>{{person | json}}</h2>
  <h2>{{cat | json}}</h2>`,
  
})
export class TestComponent implements OnInit {

	public name="SLK";
	public message="Welcome to SLK";
	public date=new Date();
	public person={"name": "Suhil", "address": "Bangalore"}
	public cat=[
  {
    "name": "Meowsy",
    "species" : "cat",
    "foods": {
      "likes": ["tuna", "catnip"],
      "dislikes": ["ham", "zucchini"]
    }
  },
  {
    "name": "Barky",
    "species" : "dog",
    "foods": {
      "likes": ["bones", "carrots"],
      "dislikes": ["tuna"]
    }
  },
  {
    "name": "Purrpaws",
    "species" : "cat",
    "foods": {
      "likes": ["mice"],
      "dislikes": ["cookies"]
    }
  }
]

	

  constructor() { }

  ngOnInit() {
  }

}
