import { Component, OnInit } from '@angular/core';
import {LocalStorage} from '@ngx-pwa/local-storage';
import * as _ from 'lodash';
import {Bill} from '../search/bill';
import {SearchService} from '../search/search.service';
import {ItemData} from '../search/data';
@Component({
  selector: 'app-items-details',
  templateUrl: './items-details.component.html',
  styleUrls: ['./items-details.component.sass']
})
export class ItemsDetailsComponent implements OnInit {
  cartItems: ItemData;
  itemsTotalCost = 0;
 options = [1, 2, 3, 4, 5];
  deliveryCharges = 50;
  OriginalQuantity: number;
  totalBill: Bill;
  days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday'];
  constructor(private localstorage: LocalStorage, private searchData: SearchService) { }

  ngOnInit() {
    this.localstorage.getItem('Items').subscribe( result =>{
      console.log('GOT value:', result);
     // console.log();
      this.cartItems = result;
      this.cartItems.forEach( item => {
        this.itemsTotalCost = this.itemsTotalCost + item.cost;
      });
      this.itemsTotalCost = this.itemsTotalCost + this.deliveryCharges;
    });
  }

  cost(product, option ) {   //--------------changing cost of item based on selected option in the table-----------//
    this.cartItems.forEach( item =>{
      if(item.itemName == product.itemName){
            this.itemsTotalCost = this.itemsTotalCost - (product.quantity * product.cost);
            product.quantity = option;
            this.itemsTotalCost = this.itemsTotalCost + (product.quantity * product.cost);

      }
    });
    this.localstorage.setItem('Items', this.cartItems).subscribe( result => {
      console.log(result);
    });

  }


  removeItem(item) {
   _.remove( this.cartItems, cart => {
     this.itemsTotalCost = this.itemsTotalCost - (cart.cost * cart.quantity);
     return  cart == item;

   });
   this.localstorage.setItem('Items', this.cartItems).subscribe( result => {
     console.log(result);
   });
  }


  makePayment() {
    alert('Payment is in processing.....');
    this.totalBill = {
      purchasedBy: 'Harish',
      purchasedOn: this.days[new Date().getDay()],
      itemsTotalCost: this.itemsTotalCost
    };
//    this.localS
    console.log(this.totalBill);
    this.searchData.createBillData(this.totalBill).subscribe(resp => {

      this.searchData.bulkCreateItemData(this.cartItems, resp).subscribe(response => {
        console.log(response);
        if (response) {
          this.localstorage.setItem('Items', '').subscribe( result => {
            console.log(result);
          });
        }
      });


    });
  }




}
