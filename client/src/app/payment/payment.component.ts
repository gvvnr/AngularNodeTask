import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.sass']
})
export class PaymentComponent implements OnInit {

  details:any;
  breakpoint:any;
  constructor(private router: Router,private route :ActivatedRoute  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.details = params;
      console.log('params',params)
      this.breakpoint = (window.innerWidth <= 400) ? 1 : 6;

    });
  }
  redirect(){
    this.router.navigate(['/search']);
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 6;
  }


}

