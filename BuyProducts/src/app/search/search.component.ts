import { Component, OnInit } from '@angular/core';
import {ItemData} from './data';
import {FormControl} from '@angular/forms';
import {SearchService} from './search.service';
import {ActivatedRoute, Router} from "@angular/router";
import {Bill} from './bill'
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {
  myControl = new FormControl();
  //items: any[];
  count :number[]=[1,2,3,4,5];
  total :number;
  userFilter: any = { Name: '' };
  rowDetails: any;
  ItemCost: number;
  contains: any;
  selectedOption: number;
  ItemName:any[] = [];
  ItemDataDetails: ItemData[]=[];
  NameAndPrice: ItemData;
  totalBill: Bill;
  totalItems="";
  abc: any;//---------------------------------------------------------
  customerName:string;
  itemsTotalCost=0;
  days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];


constructor(private searchData :SearchService,private router: Router, private route: ActivatedRoute) {  }
ngOnInit() {
  this.asign();

}


  asign(){
    this.searchData.getProductData().subscribe((response)=>{
      this.ItemName=response;
    });

  }
  addItem(){
    //this.NameAndPrice=this.rowDetails.Name+' '+this.total;
    this.userFilter.Name="";
    this.NameAndPrice = {
      product_id:this.rowDetails.id,
      quantity:this.selectedOption,
      totalCost:this.total,
      itemName:this.rowDetails.Name
    };
    this.totalItems=this.totalItems+' '+this.rowDetails.Name;
    this.itemsTotalCost=this.itemsTotalCost+this.total;
    console.log(this.NameAndPrice.product_id);
    this.ItemDataDetails.push(<ItemData>this.NameAndPrice);
    this.contains=false;

  }
  makePayment(){
    console.log('making payment.....');
  this.searchData.createItemData(this.ItemDataDetails).subscribe(resp => {
    console.log('response is:',resp);

  });
  console.log('In ----------------bill table----------');
  this.totalBill={
    purchasedBy: this.customerName,
    purchasedOn: this.days[new Date().getDay()],
    listOfItems:this.totalItems,
    itemsTotalCost:this.itemsTotalCost
  };
  this.searchData.createBillData(this.totalBill).subscribe(resp =>{
      console.log(resp);
    });

  this.router.navigate(['/payment'],{ queryParams: { list: this.ItemDataDetails[0].itemName } });

  }

  totalCost() {
    this.total=(this.selectedOption * this.ItemCost);

  }

  itemNames(row){
    this.rowDetails=row;
    this.ItemCost=this.rowDetails.price;
    this.contains=true;
  }
}
