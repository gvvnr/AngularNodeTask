import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";
//import { FlashMessagesService } from 'ngx-flash-messages';
import { NgFlashMessageService } from 'ng-flash-messages';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.sass']
})
export class PaymentComponent implements OnInit {

  details:any;
  breakpoint:any;
  constructor(private router: Router,private route :ActivatedRoute,private ngFlashMessageService: NgFlashMessageService) { }
//, private flashMessagesService: FlashMessagesService
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.details = params;
      console.log('params',params);

    });

    this.ngFlashMessageService.showFlashMessage({

      messages: ["Yah! i'm alive"],
      dismissible: true,
      timeout: 10000,
      type: 'danger'
    });

/*    this.flashMessagesService.show('My component has initialized!', {
      classes: ['alert', 'alert-warning'], // You can pass as many classes as you need
      timeout: 1000, // Default is 3000
    });*/
  }
  redirect(){
    this.router.navigate(['/search']);
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 6;
  }


}

