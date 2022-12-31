import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersAddressService {

  constructor(private _http:HttpClient) { } 

  getCustomersAddress():Observable<any>
  {
    return this._http.get(`http://localhost:37964/Api/GetCustomersAddress`);
  }
  getCustomerAddressById(id:number):Observable<any>
  {
    return this._http.get(`http://localhost:37964/Api/GetCustomersAddressById/${id}`);
  }
  AddCustomerAddress(CustomerAddress:any):Observable<any>
  {
    return this._http.post("http://localhost:37964/Api/AddCustomerAddress", CustomerAddress,{responseType: 'text'});
  }

  
  UpdateCustomerAddress(CustomerAddress:any):Observable<any>
  {
    console.log(CustomerAddress);
    
    return this._http.put("http://localhost:37964/Api/UpdateCustomerAddress", CustomerAddress,{responseType: 'text'});
  }

  DeleteCustomerAddress(CustomerAddress:any):Observable<any>
  {
    console.log(CustomerAddress);
    
    return this._http.delete("http://localhost:37964/Api/DeleteCustomerAddress",{
        body:CustomerAddress
    } );
  }
}
