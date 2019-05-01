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
      console.log('params',params)
      this.breakpoint = (window.innerWidth <= 400) ? 1 : 6;

    });

    this.ngFlashMessageService.showFlashMessage({
      // Array of messages each will be displayed in new line
      messages: ["Yah! i'm alive"],
      // Whether the flash can be dismissed by the user defaults to false
      dismissible: true,
      // Time after which the flash disappears defaults to 2000ms
      timeout: 10000,
      // Type of flash message, it defaults to info and success, warning, danger types can also be used
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

