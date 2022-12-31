import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.scss']
})
export class CustomerCreateComponent implements OnInit {


  constructor(private _CustomerService:CustomerService , private _ActivatedRoute:ActivatedRoute ,private _Router:Router) { }

 
  CreateProduct:FormGroup=new FormGroup({
    'CustomerFirstName':new FormControl(null,[Validators.required]),
    'CustomerLastName':new FormControl(null,[Validators.required]),
    'CustomerGender':new FormControl(null,[Validators.required]), 
    'CustomerDOB':new FormControl(null,[Validators.required]),
    'CustomerEmail':new FormControl(null,[Validators.required,Validators.email]),
  })

  Create(){
    if(this.CreateProduct.invalid){
      return;
    }

    this._CustomerService.AddCustomer(this.CreateProduct.value).subscribe((res)=>{
      this._Router.navigateByUrl("/CustomerHome");
    })
  }


  ngOnInit(): void {
  }

}
