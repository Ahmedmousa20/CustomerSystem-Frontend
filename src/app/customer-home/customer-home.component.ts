import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';


@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.scss']
})
export class CustomerHomeComponent implements OnInit {

  Customers:any[]=[];
  term:any='';
  constructor(private _CustomerService:CustomerService,) { }

  GetCustomers(){
    this._CustomerService.getCustomers().subscribe((data)=>{
      this.Customers=data;
      console.log(this.Customers);
    })
  }

  ngOnInit(): void {
    this.GetCustomers();
  }

}
