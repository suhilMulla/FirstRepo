import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-exp',
  template: `<button (click)="show=!show">{{show?'hide':'show'}}
  			</button>
  			
  			<br><br>
  			<div *ngIf="show; else elseBlock">Text to show</div>
  			<ng-template #elseBlock>Alternate text while primary text is hidden</ng-template>
  			`,
})
export class NgIfExpComponent implements OnInit {

	show: boolean= true

  constructor() { }

  ngOnInit() {
  }

}
