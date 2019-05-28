import { Component, OnInit } from '@angular/core';
import {LocalStorage} from '@ngx-pwa/local-storage';
import * as _ from 'lodash';
import {Bill} from '../search/bill';
import {SearchService} from '../search/search.service';
import {ItemData} from '../search/data';
import {Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-items-details',
  templateUrl: './items-details.component.html',
  styleUrls: ['./items-details.component.sass']
})
export class ItemsDetailsComponent implements OnInit {
  cartItems: ItemData[];
  itemsTotalCost = 0;
 options = [1, 2, 3, 4, 5];
  deliveryCharges = 50;
  totalBill: Bill;
  days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday'];
  constructor(private localstorage: LocalStorage, private searchData: SearchService, private router: Router) { }

  ngOnInit() {
    this.localstorage.getItem('Items').subscribe( result => {
      console.log('GOT value:', result);
     // console.log();
      this.cartItems = result;
      /*this.cartItems.forEach( item => {
        this.itemsTotalCost = this.itemsTotalCost + item.cost;
        console.log('FFOOORR EEAACCHH');
      });*/
      Object.keys(this.cartItems).forEach( item =>{
        console.log(item);
        this.itemsTotalCost = this.itemsTotalCost + (this.cartItems[item].cost * this.cartItems[item].quantity);
        console.log('yuuuup');
      })
      this.itemsTotalCost = this.itemsTotalCost + this.deliveryCharges;
    });
  }

  cost(product, option ) {   //--------------changing cost of item based on selected option in the table-----------//
    Object.keys(this.cartItems).forEach( item => {
      if(this.cartItems[item].itemName == product.itemName) {
        this.itemsTotalCost = this.itemsTotalCost - (product.quantity * product.cost);
        product.quantity = option;
        this.itemsTotalCost = this.itemsTotalCost + (product.quantity * product.cost);

      }
     // console.log(this.cartItems[item]);
    });
    this.localstorage.setItem('Items', this.cartItems).subscribe( result => {
      console.log(result);
    });

  }


  removeItem(item) {

    //Object.keys(this.cartItems).
   _.remove( this.cartItems , cart => {
     console.log(cart.cost * cart.quantity,'AAAAAA');
     if ( cart == item)
     this.itemsTotalCost = this.itemsTotalCost - (cart.cost * cart.quantity);
     return  cart == item;
     console.log('YUP');

   });
   /*
   for(let i=0;i<this.ItemDataDetails.length;i++){
      if(this.ItemDataDetails[i]==itemAndDetails){
        this.itemsTotalCost=this.itemsTotalCost-itemAndDetails.cost;
        this.ItemDataDetails.splice(i,1);
      }
    }
    */
/*   Object.keys(this.cartItems).forEach(cart => {
     if(this.cartItems[cart]==item){
       this.itemsTotalCost = this.itemsTotalCost - (this.cartItems[cart].cost * this.cartItems[cart].quantity);
       let res = delete this.cartItems[item];
       console.log(res);
     }
   });*/

   this.localstorage.setItem('Items', this.cartItems).subscribe( result => {
     console.log(result);
   });
  }


  makePayment() {
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
        this.router.navigate(['/specificOrderDetails'],{queryParams:{id:resp.id}});
      });


    });

  }




}
