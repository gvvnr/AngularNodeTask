import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";
//import { FlashMessagesService } from 'ngx-flash-messages';
import { NgFlashMessageService } from 'ng-flash-messages';
import {PreviousOrdersListService} from '../previous-orders/previous-orders-list.service';
import * as _ from "lodash";
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.sass']
})
export class PaymentComponent implements OnInit {

  details:any;
  breakpoint:any;
  billData:Data;
  order:any;
  display:boolean;
  constructor(private router: Router,private route :ActivatedRoute,private previousOrders :PreviousOrdersListService) { }
  ngOnInit() {
    this.display=true;
    this.route.queryParams.subscribe(params => {
      this.details = params;
      this.billData={
        id:params.id
      };
      this.previousOrders.getBillDataById(this.billData).subscribe(result =>{
        this.order=result[0];
      });
    });
    _.delay(()=>{this.display=false;}, 1000);

  }
  specificDetails(){
    this.router.navigate(['/specificOrderDetails'],{queryParams:{id:this.order.id}});
  }


}


export class Data{
  id:number;
}
