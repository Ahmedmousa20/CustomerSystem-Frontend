import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-delete',
  templateUrl: './customer-delete.component.html',
  styleUrls: ['./customer-delete.component.scss']
})
export class CustomerDeleteComponent implements OnInit {

  customer:any;
  id:any;

  constructor(private _CustomerService:CustomerService , private _ActivatedRoute:ActivatedRoute ,private _Router:Router) { }
 
  DeleteCustomer:FormGroup=new FormGroup({
    'CustomerId':new FormControl({value:'',disabled:true}),
    'CustomerFirstName':new FormControl({value:'',disabled:true},[Validators.required]),
    'CustomerLastName':new FormControl({value:'',disabled:true},[Validators.required]),
    'CustomerGender':new FormControl({value:'',disabled:true},[Validators.required]), 
    'CustomerDOB':new FormControl({value:'',disabled:true},[Validators.required]),
    'CustomerEmail':new FormControl({value:'',disabled:true},[Validators.required,Validators.email]),
  })

  getCustomer(){
    this.id=this._ActivatedRoute.snapshot.paramMap.get('id');
    this._CustomerService.getCustomerById(this.id).subscribe((data)=>{
      this.customer=data;
      console.log(this.customer);
      this.DeleteCustomer.get("CustomerId")?.setValue(this.customer.CustomerId);
      this.DeleteCustomer.get("CustomerFirstName")?.setValue(this.customer.CustomerFirstName);
      this.DeleteCustomer.get("CustomerLastName")?.setValue(this.customer.CustomerLastName);
      this.DeleteCustomer.get("CustomerDOB")?.setValue(this.customer.CustomerDOB);
      this.DeleteCustomer.get("CustomerGender")?.setValue(this.customer.CustomerGender);
      this.DeleteCustomer.get("CustomerEmail")?.setValue(this.customer.CustomerEmail);


    })
  }

  Delete(){
    this._CustomerService.DeleteCustomer(this.DeleteCustomer.value).subscribe((res)=>{
      this._Router.navigateByUrl("/CustomerHome");

    })
  }
  ngOnInit(): void {
    this.getCustomer()
  }

}
