import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listOfItems'
})
export class ListOfItemsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    //ProductModel.Name
    let totalItems='',i;
    for( i=0;i<value.length;i++){
      totalItems=totalItems+value[i]["ProductModel"].Name+',';
    }
    return totalItems;
  }

}
/*
    totalItems=totalItems+value[value.length-1];
    return totalItems;
 */
