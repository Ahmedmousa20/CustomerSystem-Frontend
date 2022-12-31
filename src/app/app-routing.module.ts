import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressHomeComponent } from './address-home/address-home.component';
import { CreateAddressComponent } from './create-address/create-address.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { CustomerDeleteComponent } from './customer-delete/customer-delete.component';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { CustomerUpdateComponent } from './customer-update/customer-update.component';
import { DeleteAddressComponent } from './delete-address/delete-address.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UpdateAddressComponent } from './update-address/update-address.component';

const routes: Routes = 
[
  {path:'',redirectTo:'CustomerHome',pathMatch:'full'},
  {path:'CustomerHome',component:CustomerHomeComponent},
  {path:'CustomerCreate',component:CustomerCreateComponent},
  {path:'CustomerUpdate/:id',component:CustomerUpdateComponent},
  {path:'CustomerDelete/:id',component:CustomerDeleteComponent},
  {path:'AddressHome',component:AddressHomeComponent},
  {path:'AddressCreate',component:CreateAddressComponent},
  {path:'AddressUpdate/:id',component:UpdateAddressComponent},
  {path:'AddressDelete/:id',component:DeleteAddressComponent},
  {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
