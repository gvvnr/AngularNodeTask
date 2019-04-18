import { Component, OnInit } from '@angular/core';
import {Data} from './data';
import {FormControl} from '@angular/forms';
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
  totalData=new Array();
  userFilter: any = { name: '' };
  value: any;
  ItemCost: number;
  contains: any;
  notContains: any;
  NameAndPrice: string;
  selectedOption: number;
  NameAndPriceValue=false;
  ItemName:String;
  items: Data[]=[
    {name :'SOAP', cost:10},
    {name :'Oil', cost:10},
    {name :'Paste', cost:10},
    {name :'Shampoo', cost:10},
    {name :'CoolDrinks', cost:10},

  ];
  checkOut(){
    this.NameAndPrice=this.value+' '+this.total;
    this.NameAndPriceValue=true;
    this.totalData.push(this.NameAndPrice);
    console.log(this.totalData);
  }
  totalCost() {
    this.total=(this.selectedOption *this.ItemCost);
  }
  constructor() {


  }

  ngOnInit() {

  }
  itemNames(itemName){
    this.value=itemName;
    this.searchValue();
  }

  searchValue(){
 let i;
    for( i=0;i<this.items.length;i++){
      if(this.value==this.items[i].name){
        this.ItemCost=this.items[i].cost;
        //.ItemName=this.value;
        return this.contains=true;
      }

    }
    if(i==this.items.length)
      this.notContains=true;
  }



}
