import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { CustomerUpdateComponent } from './customer-update/customer-update.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CustomerDeleteComponent } from './customer-delete/customer-delete.component';
import { AddressHomeComponent } from './address-home/address-home.component';
import { CreateAddressComponent } from './create-address/create-address.component';
import { UpdateAddressComponent } from './update-address/update-address.component';
import { DeleteAddressComponent } from './delete-address/delete-address.component';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CustomerHomeComponent,
    CustomerCreateComponent,
    CustomerUpdateComponent,
    NavbarComponent,
    NotFoundComponent,
    CustomerDeleteComponent,
    AddressHomeComponent,
    CreateAddressComponent,
    UpdateAddressComponent,
    DeleteAddressComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
