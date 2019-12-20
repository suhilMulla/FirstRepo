import { Injectable } from '@angular/core';
import { EmployeeserviceService } from './employeeservice.service';

@Injectable({
  providedIn: 'root'
})
export class GetBonusService {


  public Emp=[];
  public i;
  public bonus=[];
  constructor(private _empBonus: EmployeeserviceService) { 
   
  }

  
	getBonus()
  {
  	this.Emp=this._empBonus.getData();
    for(let i=0;i<this.Emp.length;i++)
    {
      this.bonus[i]=this.Emp[i].salary*0.1;
    }
    return (this.bonus);
  }
}
