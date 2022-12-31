import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private _http:HttpClient) { } 

  getCustomers():Observable<any>
  {
    return this._http.get(`http://localhost:37964/Api/GetCustomers`);
  }
  getCustomerById(id:number):Observable<any>
  {
    return this._http.get(`http://localhost:37964/Api/GetCustomerById/${id}`);
  }
  AddCustomer(CustomerData:any):Observable<any>
  {
    return this._http.post("http://localhost:37964/Api/AddCutomer", CustomerData,{responseType: 'text'});
  }

  
  UpdateCustomer(CustomerData:any):Observable<any>
  {
    console.log(CustomerData);
    
    return this._http.put("http://localhost:37964/Api/UpdateCustomer", CustomerData,{responseType: 'text'});
  }

  DeleteCustomer(CustomerData:any):Observable<any>
  {
    //console.log(CustomerData);
    
    return this._http.delete("http://localhost:37964/Api/DeleteCustomer",{
        body:CustomerData
    } );
  }

}
