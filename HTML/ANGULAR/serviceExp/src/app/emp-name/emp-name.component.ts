import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService } from 'src/app/employeeservice.service';


@Component({
  selector: 'app-emp-name',
  templateUrl: './emp-name.component.html',
  styleUrls: ['./emp-name.component.css']
})
export class EmpNameComponent implements OnInit {


	/*public Employee = [{"id":1, "name":"Aditya", "address":"Blr"},
						{"id":2, "name":"Chandan", "address":"Mum"},
						{"id":3, "name":"Akshata", "address":"Mlr"},
						{"id":4, "name":"Prajwal", "address":"Tum"},
						{"id":5, "name":"Vadiraj", "address":"Chen"}]*/

	public Employee=[];

  constructor( private _empservice:EmployeeserviceService) { }

  ngOnInit() {
  	//this.Employee=this._empservice.getData();
    this._empservice.getData().subscribe(data=>this.Employee=data)
  }

}
