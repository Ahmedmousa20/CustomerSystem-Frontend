import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomersAddressService } from '../customers-address.service';

@Component({
  selector: 'app-delete-address',
  templateUrl: './delete-address.component.html',
  styleUrls: ['./delete-address.component.scss']
})
export class DeleteAddressComponent implements OnInit {

  customerAddress:any;
  id:any;
  constructor(private _CustomerAddressService:CustomersAddressService , private _ActivatedRoute:ActivatedRoute ,private _Router:Router) { }


  DeleteAddress:FormGroup=new FormGroup({
    'Id':new FormControl({value:'',disabled:true}),
    'CustomerId':new FormControl({value:'',disabled:true},[Validators.required]),
    'CustomerAddress':new FormControl({value:'',disabled:true},[Validators.required]),
  })

  getCustomerAddress(){
    this.id=this._ActivatedRoute.snapshot.paramMap.get('id');
    this._CustomerAddressService.getCustomerAddressById(this.id).subscribe((data)=>{
      this.customerAddress=data;
      console.log(this.customerAddress);
      this.DeleteAddress.get("Id")?.setValue(this.customerAddress.Id);
      this.DeleteAddress.get("CustomerId")?.setValue(this.customerAddress.CustomerId);
      this.DeleteAddress.get("CustomerAddress")?.setValue(this.customerAddress.CustomerAddress);  

    })
  }

  Delete(){
    this._CustomerAddressService.DeleteCustomerAddress(this.DeleteAddress.value).subscribe((res)=>{
      this._Router.navigateByUrl("/AddressHome");

    })
  }
  ngOnInit(): void {
    this.getCustomerAddress()

  }

}
