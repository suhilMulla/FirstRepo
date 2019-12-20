import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjx/Observable';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  private _url:string ="/assets/Data/employees.json"
  constructor(private http:HttpClient) { }

  getData(): Observable<IEmployee[]>
  {

    return this.http.get<IEmployee[]>(this._url);
  	/*return [{"id":1, "name":"Aditya", "address":"Blr", "salary":50000},
						{"id":2, "name":"Chandan", "address":"Mum", "salary":30000},
						{"id":3, "name":"Akshata", "address":"Mlr", "salary":40000},
						{"id":4, "name":"Prajwal", "address":"Tum", "salary":60000},
						{"id":5, "name":"Vadiraj", "address":"Chen", "salary":70000}];*/
  }

  
}
