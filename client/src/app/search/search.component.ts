import { Component, OnInit } from '@angular/core';
import {ItemData} from './data';
import {FormControl} from '@angular/forms';
import {SearchService} from './search.service';
import { Router, NavigationExtras} from "@angular/router";
import {Bill} from './bill'
import {MatDialog} from '@angular/material';
import * as _ from "lodash";
import { LocalStorage } from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {
  myControl = new FormControl();
  count: number[]=[1,2,3,4,5];
  userFilter: any = { Name: '' };
  contains: any; // if item is present displays the table
  ItemName: any[] = [];
  ItemDataDetails: ItemData[] = [];
  totalBill: Bill;
  customerName: string;
  itemsTotalCost = 0;
  paymentOption = true;
  days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday'];
  soapsDetails: any;   // stores soap specific row details from database
  Bluesoapschecked = false;
  Greensoapschecked = false;
  Whitesoapschecked = false;

constructor(private searchData: SearchService,private router: Router,public dialog: MatDialog, private localstorage :LocalStorage) {  }
ngOnInit() {
  this.asign();
  this.localstorage.getItem('Items').subscribe( result =>{
    console.log('GOT value:', result);
    if(result!=''){
      this.ItemDataDetails =result;
    }

  });

}
cost(product) {   //--------------changing cost of item based on selected option in the table-----------//
  this.ItemName.forEach( item =>{
    if(item.Name==product.itemName){
      this.itemsTotalCost=this.itemsTotalCost-product.cost;
      product.cost=item.price*product.quantity;
      this.itemsTotalCost=this.itemsTotalCost+product.cost;
    }
  });

}


  soapCategory(Blue,Green,White){

//alert(color);Soap
    if(Blue || Green || White){
      //alert(Blue);
      this.searchData.getProductByCategoryAndColor('Soap',Blue,Green,White).subscribe((response)=>{
        this.ItemName=response;

      });
    }
    else
      this.soapDetails()


  }

  asign(){//-------getting all rows from data base------------------------//
    this.searchData.getProductData().subscribe((response)=>{
      this.ItemName=response;
    });

  }
  soapDetails(){
    this.searchData.getProductByCategory('Soap').subscribe((response)=>{
      console.log(response);
      this.ItemName=response;
    });
    this.soapsDetails=true;
  }

  removeItem(itemAndDetails){// deleting particular row in item table before making payment
    for(let i=0;i<this.ItemDataDetails.length;i++){
      if(this.ItemDataDetails[i]==itemAndDetails){
        this.itemsTotalCost=this.itemsTotalCost-itemAndDetails.cost;
        this.ItemDataDetails.splice(i,1);
      }
    }
    if(this.ItemDataDetails.length==0){
      this.contains=false;
    }

  }


  itemNames(row){  //------Adding Items into Item tables
    this.ItemDataDetails.push({
      product_id: row.id,
      quantity: 1,
      cost: row.price,
      itemName: row.Name
    });
    console.log(this.ItemDataDetails);
    this.localstorage.setItem('Items', this.ItemDataDetails).subscribe(res=>{
      console.log('ADDDED value', res);
    });


    this.router.navigate(['/itemDetails']);
  /*for(let i=0; i<this.ItemDataDetails.length;i++){
    if(this.ItemDataDetails[i].itemName==row.Name){
      if(this.ItemDataDetails[i].quantity<5){
        //this.itemsTotalCost=this.itemsTotalCost-this.ItemDataDetails[i].cost;
        this.ItemDataDetails[i].quantity=Number(this.ItemDataDetails[i].quantity)+1;
        this.itemsTotalCost=this.itemsTotalCost+row.price;
        this.ItemDataDetails[i].cost=this.ItemDataDetails[i].quantity*row.price;
        console.log(this.ItemDataDetails[i].quantity,'Quant ');
        this.userFilter.Name="";
        return;
      }

      else{
        this.ItemDataDetails.push({
          product_id:row.id,
          quantity:1,
          cost:row.price,
          itemName:row.Name
        });
        console.log(this.ItemDataDetails);
        this.contains=true;
        this.itemsTotalCost=this.itemsTotalCost+row.price;


        this.userFilter.Name="";//--empties auto completer after every search-----
  return;

      }
    }
  }*/

/*    this.ItemDataDetails.push({
      product_id:row.id,
      quantity:1,
      cost:row.price,
      itemName:row.Name
    });*/

    this.contains = true;
    this.itemsTotalCost = this.itemsTotalCost + row.price;

    this.userFilter.Name="";//--empties auto completer after every search-----
  }


  makePayment(){ //--------------------inserting data into bill and item tables----------------//

    this.totalBill={
      purchasedBy: this.customerName,
      purchasedOn: this.days[new Date().getDay()],
      itemsTotalCost:this.itemsTotalCost
    };
//    this.localS
    console.log(this.totalBill);
    this.searchData.createBillData(this.totalBill).subscribe(resp =>{

      this.searchData.bulkCreateItemData(this.ItemDataDetails,resp).subscribe(response => {
        console.log(response);
        this.navigate(resp);

      });


    });



  }
  navigate(data) {//---------navigating to payment page by taking some required data----------------------
        this.router.navigate(['/specificOrderDetails'],{queryParams:{id:data.id}});

  }
  /*this.searchData.createItemData(this.ItemDataDetails,resp).subscribe(response => {
    console.log('create item response');
    console.log(response);


  });*/


  previousBills(){
    this.router.navigate(['/previousOrders'])
  }










  disableOrEnableButton(){//-----enabling or disabling a button based on input text field before payment------//

    if(this.customerName.match('[a-zA-Z0-9]'))
      this.paymentOption=false;
    else {
      this.paymentOption=true;


    }

  }


}













