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
  selectedOption:any=[1];//--each selected items item count
  ItemName:any[] = [];
  ItemDataDetails: ItemData[]=[];
  //NameAndPrice: ItemData;
  totalBill: Bill;
  totalItems="";
  customerName:string;
  itemsTotalCost=0;
  itemCount=-1;
  paymentOption=true;
  days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];


constructor(private searchData :SearchService,private router: Router,public dialog: MatDialog) {  }
ngOnInit() {
  this.asign();

}
cost(product){//--------------changing cost of item based on select option in the table-----------//



  for(let i=0;i<this.ItemName.length;i++){
    if(this.ItemName[i].Name==product.itemName){
      this.itemsTotalCost=this.itemsTotalCost-product.totalCost;
      product.totalCost=product.cost*this.selectedOption[product.itemCount];
      this.itemsTotalCost=this.itemsTotalCost+product.totalCost;
      product.quantity=this.selectedOption[product.itemCount];
    }
  }
}
  disableOrEnableButton(){//-----enabling or disabling a button based on input text field before payment------//

  if(this.customerName.match('[a-zA-Z0-9]'))
    this.paymentOption=false;
  else {
    this.paymentOption=true;


  }

  }

  asign(){//-------getting all rows from data base------------------------//
    this.searchData.getProductData().subscribe((response)=>{
      this.ItemName=response;
    });

  }
  /*selectedFile:File;
  processFile(img){
  console.log(img.target.files[0]);
  this.selectedFile=img.target.files[0];
  this.searchData.getImage().subscribe( imageData =>{
    console.log(imageData);
  })
  }*/

  makePayment(){ //--------------------inserting data into bill and item tables----------------//
    this.totalBill={
      purchasedBy: this.customerName,
      purchasedOn: this.days[new Date().getDay()],
      listOfItems:this.totalItems,
      itemsTotalCost:this.itemsTotalCost
    };
    this.searchData.createBillData(this.totalBill).subscribe(resp =>{
      console.log('rrr',resp);
      /*this.searchData.createItemData(this.ItemDataDetails,resp).subscribe(response => {
        console.log('create item response');
        console.log(response);


      });*/
      this.searchData.bulkCreateItemData(this.ItemDataDetails,resp).subscribe(response => {
        console.log('bulk create item response');
        console.log(response);



      });


      this.navigate(resp);
    });

  }
  navigate(data) {//---------navigating to payment page by taking some required data----------------------
    let navigationExtras: NavigationExtras = {
      queryParams: data
    };
    this.router.navigate(['/payment'], navigationExtras);
  }
  previousBills(){
  this.router.navigate(['/previousOrders'])
  }



  itemNames(row){//
    this.selectedOption.push(1);
    this.rowDetails=row;
    this.ItemCost=this.rowDetails.price;
    this.contains=true;
    this.itemsTotalCost=this.itemsTotalCost+this.ItemCost;
    this.itemCount=this.itemCount+1;
    /*this.NameAndPrice = {//-----class object for storing data in Item table-------------------------
      product_id:this.rowDetails.id,
      quantity:this.selectedOption[this.itemCount],
      totalCost:this.ItemCost,
      itemName:this.rowDetails.Name,
      cost:this.ItemCost,
      itemCount:this.itemCount
    };*/
    if(this.totalItems.length>0)
    this.totalItems=this.totalItems+' , '+this.rowDetails.Name;
    else
      this.totalItems=this.totalItems+' '+this.rowDetails.Name;
   // this.ItemDataDetails.push(<ItemData>this.NameAndPrice);

    this.ItemDataDetails.push({
      product_id:this.rowDetails.id,
      quantity:this.selectedOption[this.itemCount],
      totalCost:this.ItemCost,
      itemName:this.rowDetails.Name,
      cost:this.ItemCost,
      itemCount:this.itemCount,
    })
    this.userFilter.Name="";//--empties auto completer after every search-----
  }
}
