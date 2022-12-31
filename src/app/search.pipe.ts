import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(Items:any[] , searchTxt: any): any {


    if(!searchTxt){
      return Items;
    }
    return Items.filter((Item)=>{

      if(Item.Id){
      if(searchTxt){
      if(Item.CustomerId==searchTxt){
          return Item;
        }
      }
      }else{
        return Item.CustomerFirstName.toLowerCase().includes(searchTxt.toLowerCase())||Item.CustomerLastName.toLowerCase().includes(searchTxt.toLowerCase());
      }
    })
  }

}
