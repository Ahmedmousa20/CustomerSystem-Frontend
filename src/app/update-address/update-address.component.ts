import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomersAddressService } from '../customers-address.service';

@Component({
  selector: 'app-update-address',
  templateUrl: './update-address.component.html',
  styleUrls: ['./update-address.component.scss']
})
export class UpdateAddressComponent implements OnInit {

  constructor(private _CustomerAddressService:CustomersAddressService , private _ActivatedRoute:ActivatedRoute ,private _Router:Router) { }
  
  CustomerAddress:any;
  id:any;

  UpdateAddress:FormGroup=new FormGroup({
    'Id':new FormControl(null),
    'CustomerId':new FormControl(null,[Validators.required]),
    'CustomerAddress':new FormControl(null,[Validators.required , Validators.pattern("[0-9]{2,5}-[a-zA-Z]{2,5}-[a-zA-Z]{2,5}-[a-zA-Z]{2,5}")]),
  })

  getAddress(){
    this.id=this._ActivatedRoute.snapshot.paramMap.get('id');
    this._CustomerAddressService.getCustomerAddressById(this.id).subscribe((data)=>{
      this.CustomerAddress=data;
      console.log(this.CustomerAddress);
      this.UpdateAddress.get("Id")?.setValue(this.CustomerAddress.Id);
      this.UpdateAddress.get("CustomerId")?.setValue(this.CustomerAddress.CustomerId);
      this.UpdateAddress.get("CustomerAddress")?.setValue(this.CustomerAddress.CustomerAddress);



    })

  }

  Update(){
    if(this.UpdateAddress.invalid&&this.UpdateAddress.get("Id")!=this.CustomerAddress.Id&&this.UpdateAddress.get("CustomerId")!=this.CustomerAddress.CustomerId){
      return;
    }

    this._CustomerAddressService.UpdateCustomerAddress(this.UpdateAddress.value).subscribe((res)=>{
      this._Router.navigateByUrl("/AddressHome");

    })
  }
  ngOnInit(): void {
    this.getAddress()
  }

}
