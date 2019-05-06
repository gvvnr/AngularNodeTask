import { Component, OnInit } from '@angular/core';
import {ItemData} from './data';
import {FormControl} from '@angular/forms';
import {SearchService} from './search.service';
import { Router, NavigationExtras} from "@angular/router";
import {Bill} from './bill'
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {
  myControl = new FormControl();
  count :number[]=[1,2,3,4,5];
  userFilter: any = { Name: '' };
  rowDetails: any;
  ItemCost: number;
  contains: any;// if item is present displays the table
  ItemName:any[] = [];
  ItemDataDetails: ItemData[]=[];
  totalBill: Bill;
  totalItems="";
  customerName:string;
  itemsTotalCost=0;
  //itemCount=-1;
  paymentOption=true;
  days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];


constructor(private searchData :SearchService,private router: Router,public dialog: MatDialog) {  }
ngOnInit() {
  this.asign();

}
cost(product){//--------------changing cost of item based on selected option in the table-----------//
  for(let i=0;i<this.ItemName.length;i++){
    if(this.ItemName[i].Name==product.itemName){
      this.itemsTotalCost=this.itemsTotalCost-product.cost;
      product.cost=this.ItemName[i].price*product.quantity;
      this.itemsTotalCost=this.itemsTotalCost+product.cost;
    }

  }
}


  asign(){//-------getting all rows from data base------------------------//
    this.searchData.getProductData().subscribe((response)=>{
      this.ItemName=response;
    });

  }

  removeItem(itemAndDetails){// deleting particular row in item table before making payment
    for(let i=0;i<this.ItemDataDetails.length;i++){
      if(this.ItemDataDetails[i]==itemAndDetails){
        console.log('After removing');
        this.itemsTotalCost=this.itemsTotalCost-itemAndDetails.cost;
        console.log(this.ItemDataDetails.splice(i,1));
      }
    }
    if(this.ItemDataDetails.length==0){
      this.contains=false;
    }

  }


  itemNames(row){  //------Adding Items into Item tables
  for(let i=0; i<this.ItemDataDetails.length;i++){
    if(this.ItemDataDetails[i].itemName==row.Name){
      if(this.ItemDataDetails[i].quantity<5){
        this.ItemDataDetails[i].quantity=this.ItemDataDetails[i].quantity+1;
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
  }

    this.ItemDataDetails.push({
      product_id:row.id,
      quantity:1,
      cost:row.price,
      itemName:row.Name
    });
    console.log('after Item');
    console.log(this.ItemDataDetails);
    this.contains=true;
    this.itemsTotalCost=this.itemsTotalCost+row.price;

    this.userFilter.Name="";//--empties auto completer after every search-----

  }






  makePayment(){ //--------------------inserting data into bill and item tables----------------//

    this.totalBill={
      purchasedBy: this.customerName,
      purchasedOn: this.days[new Date().getDay()],
      itemsTotalCost:this.itemsTotalCost
    };
    console.log(this.totalBill);
    this.searchData.createBillData(this.totalBill).subscribe(resp =>{

      this.searchData.bulkCreateItemData(this.ItemDataDetails,resp).subscribe(response => {
        console.log(response);
        this.navigate(resp);

      });


    });

  }

  navigate(data) {//---------navigating to payment page by taking some required data----------------------
    let navigationExtras: NavigationExtras = {
      queryParams: data
    };
    console.log(navigationExtras);
    this.router.navigate(['/payment'], navigationExtras);
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













