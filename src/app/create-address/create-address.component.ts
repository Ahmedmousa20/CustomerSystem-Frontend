import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomersAddressService } from '../customers-address.service';
import { CustomerService } from '../customer.service';


@Component({
  selector: 'app-create-address',
  templateUrl: './create-address.component.html',
  styleUrls: ['./create-address.component.scss']
})
export class CreateAddressComponent implements OnInit {

  constructor(private _CustomerAddressService:CustomersAddressService ,private _CustomerService:CustomerService, private _ActivatedRoute:ActivatedRoute ,private _Router:Router) { }

  customers:any[]=[];
  
  CreateAddress:FormGroup=new FormGroup({
    'CustomerId':new FormControl(null,[Validators.required]),
    'CustomerAddress':new FormControl(null,[Validators.required , Validators.pattern("[0-9]{2,5}-[a-zA-Z]{2,5}-[a-zA-Z]{2,5}-[a-zA-Z]{2,5}")]),
  })

  GetCustomers(){
    this._CustomerService.getCustomers().subscribe((data)=>{
      this.customers=data;
      console.log(this.customers);
    })
  }

  Create(){
    if(this.CreateAddress.invalid){
      return;
    }

    this._CustomerAddressService.AddCustomerAddress(this.CreateAddress.value).subscribe((res)=>{
      this._Router.navigateByUrl("/AddressHome");
    })
  }

  ngOnInit(): void {
    this. GetCustomers();
  }

}
