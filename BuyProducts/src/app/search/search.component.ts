import { Component, OnInit } from '@angular/core';
import {ItemData} from './data';
import {FormControl} from '@angular/forms';
import {SearchService} from './search.service';
import { Router} from "@angular/router";
import {Bill} from './bill'
import {PaymentComponent} from "../payment/payment.component";
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
  contains: any;
  selectedOption:any=[1];
  ItemName:any[] = [];
  ItemDataDetails: ItemData[]=[];
  NameAndPrice: ItemData;
  totalBill: Bill;
  totalItems="";
  customerName:string;
  itemsTotalCost=0;
  itemCount=-1;
  days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];


constructor(private searchData :SearchService,private router: Router,public dialog: MatDialog) {  }
ngOnInit() {
  console.log('hello');
  this.asign();

}
cost(product){

  let i;

  for(i=0;i<this.ItemName.length;i++){
    if(this.ItemName[i].Name==product.itemName){
      this.itemsTotalCost=this.itemsTotalCost-product.totalCost;
      product.totalCost=product.cost*this.selectedOption[product.itemCount];
      this.itemsTotalCost=this.itemsTotalCost+product.totalCost;
    }
  }
}

  asign(){//getting all rows from data base
    this.searchData.getProductData().subscribe((response)=>{
      this.ItemName=response;
    });

  }

  makePayment(){//inserting data into bill and item tables
  this.searchData.createItemData(this.ItemDataDetails).subscribe(resp => {
    console.log('response is:',resp);

  });
  this.totalBill={
    purchasedBy: this.customerName,
    purchasedOn: this.days[new Date().getDay()],
    listOfItems:this.totalItems,
    itemsTotalCost:this.itemsTotalCost
  };
  this.searchData.createBillData(this.totalBill).subscribe(resp =>{
      console.log(resp);
    });
    const dialogRef = this.dialog.open(PaymentComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    this.ItemDataDetails=[];
    this.contains=undefined;
 // this.router.navigate(['/payment']);

  }


  itemNames(row){
    this.selectedOption.push(1);
    console.log(this.selectedOption);
    this.rowDetails=row;
    this.ItemCost=this.rowDetails.price;
    this.contains=true;
    this.itemsTotalCost=this.itemsTotalCost+this.ItemCost;
    this.itemCount=this.itemCount+1;
    this.NameAndPrice = {
      product_id:this.rowDetails.id,
      quantity:this.selectedOption[this.itemCount],
      totalCost:this.ItemCost,
      itemName:this.rowDetails.Name,
      cost:this.ItemCost,
      itemCount:this.itemCount
    };
    this.totalItems=this.totalItems+' '+this.rowDetails.Name;
    this.ItemDataDetails.push(<ItemData>this.NameAndPrice);
    this.userFilter.Name="";
  }
}
