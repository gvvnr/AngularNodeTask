import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'totalItems'
})
export class TotalItemsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let i, totalItems=0;
    for( i=0;i<value.length;i++){
      totalItems=totalItems+value[i].quantity;
      // console.log(value[i].total)
    }
    return totalItems;
  }

}
