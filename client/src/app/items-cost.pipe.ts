import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'itemsCost'
})
export class ItemsCostPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let i, totalCost=0;
    for( i=0;i<value.length;i++){
      totalCost=totalCost+value[i].totalCost;
     // console.log(value[i].total)
    }
    return totalCost;
  }

}
