import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-blue]',
  template: '<div>Hello</div>' ,
  styles: ['div{color:blue;}']
})
export class BlueComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
