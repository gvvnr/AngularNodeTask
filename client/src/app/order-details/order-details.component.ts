import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";
import {PreviousOrdersListService} from '../previous-orders/previous-orders-list.service'
@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.sass']
})
export class OrderDetailsComponent implements OnInit {
details:any;
  billData:SpecificBillData;
  constructor(private route :ActivatedRoute,private previousOrders :PreviousOrdersListService) { }
  allExpandState=false;
  panelOpenState=false;
  ngOnInit() {
//    this.details=this.route.snapshot.queryParamMap.get('id');
    this.billData={
      id:Number(this.route.snapshot.queryParamMap.get('id'))
    };
    this.previousOrders.getBillDataById(this.billData).subscribe(result =>{
      console.log(result);
      this.details=result;
    });
  }

}

export class SpecificBillData{
  id:number;
}
