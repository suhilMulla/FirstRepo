import { Component, OnInit } from '@angular/core';
import { GetBonusService } from 'src/app/get-bonus.service';

@Component({
  selector: 'app-emp-bonus',
  templateUrl: './emp-bonus.component.html',
  styleUrls: ['./emp-bonus.component.css']
})
export class EmpBonusComponent implements OnInit {


	public bonus:any=[]; 
  constructor(private _empserve:GetBonusService) { }

  ngOnInit() {
  	this.bonus=this._empserve.getBonus();
  }

}
