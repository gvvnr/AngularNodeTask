import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";
//import { FlashMessagesService } from 'ngx-flash-messages';
import { NgFlashMessageService } from 'ng-flash-messages';
import {PreviousOrdersListService} from '../previous-orders/previous-orders-list.service'

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
  constructor(private router: Router,private route :ActivatedRoute,private previousOrders :PreviousOrdersListService) { }
//, private flashMessagesService: FlashMessagesService
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.details = params;
      this.billData={
        id:params.id
      };
      this.previousOrders.getBillDataById(this.billData).subscribe(result =>{

        this.order=result;
        console.log(this.order)
      });
    });



  }


}


export class Data{
  id:number;
}
