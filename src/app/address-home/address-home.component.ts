import { Component, OnInit } from '@angular/core';
import { CustomersAddressService } from '../customers-address.service';


@Component({
  selector: 'app-address-home',
  templateUrl: './address-home.component.html',
  styleUrls: ['./address-home.component.scss']
})
export class AddressHomeComponent implements OnInit {

  CustomersAddress:any[]=[];
  term:any;
  constructor(private _CustomerAddressService:CustomersAddressService) { }

  GetCustomersAddress(){
    this._CustomerAddressService.getCustomersAddress().subscribe((data)=>{
      this.CustomersAddress=data;
      console.log(this.CustomersAddress);
    })
  }
  ngOnInit(): void {
    this.GetCustomersAddress();
  }

}
