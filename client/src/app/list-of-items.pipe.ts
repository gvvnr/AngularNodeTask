import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listOfItems'
})
export class ListOfItemsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    //ProductModel.Name
    let totalItems='',i;
    for( i=0;i<value.length-1;i++){
      totalItems=totalItems+value[i]["ProductModel"].Name+',';
    }
    totalItems=totalItems+value[value.length-1]["ProductModel"].Name;
    return totalItems;
  }

}
