import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.scss']
})
export class CustomerUpdateComponent implements OnInit {

  constructor(private _CustomerService:CustomerService , private _ActivatedRoute:ActivatedRoute ,private _Router:Router) { }

  customer:any;
  id:any;


  UpdateCustomer:FormGroup=new FormGroup({
    'CustomerId':new FormControl(null),
    'CustomerFirstName':new FormControl(null,[Validators.required]),
    'CustomerLastName':new FormControl(null,[Validators.required]),
    'CustomerGender':new FormControl(null,[Validators.required]), 
    'CustomerDOB':new FormControl(null,[Validators.required]),
    'CustomerEmail':new FormControl(null,[Validators.required,Validators.email]),
  })

  
  getCustomer(){
    this.id=this._ActivatedRoute.snapshot.paramMap.get('id');
    this._CustomerService.getCustomerById(this.id).subscribe((data)=>{
      this.customer=data;
      console.log(this.customer);
      this.UpdateCustomer.get("CustomerId")?.setValue(this.customer.CustomerId);
      this.UpdateCustomer.get("CustomerFirstName")?.setValue(this.customer.CustomerFirstName);
      this.UpdateCustomer.get("CustomerLastName")?.setValue(this.customer.CustomerLastName);
      this.UpdateCustomer.get("CustomerEmail")?.setValue(this.customer.CustomerEmail);


    })

  }

  Update(){
    if(this.UpdateCustomer.invalid&&this.UpdateCustomer.get("CustomerId")!=this.customer.CustomerId){
      return;
    }

    this._CustomerService.UpdateCustomer(this.UpdateCustomer.value).subscribe((res)=>{
      this._Router.navigateByUrl("/CustomerHome");

    })
  }
  ngOnInit(): void {
    this.getCustomer()
  }

  

}
