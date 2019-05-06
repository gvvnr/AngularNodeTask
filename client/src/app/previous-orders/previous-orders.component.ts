import { Component, OnInit } from '@angular/core';
import { SearchService} from '../search/search.service'
import {PreviousOrdersListService} from './previous-orders-list.service'
@Component({
  selector: 'app-previous-orders',
  templateUrl: './previous-orders.component.html',
  styleUrls: ['./previous-orders.component.sass']
})
export class PreviousOrdersComponent implements OnInit {
  previousBills:any;
  p: number = 1;
  pageNo: number=1;
  //totalPages: number=10;
  itemsPerPage: number=3;
  displayedColumns=['id','purchasedBy','total','purchasedOn','ListOfItems'];
  page:Paginate;
  total:number;
  rows:any[];
  constructor(private searchData :SearchService, private previousOrders :PreviousOrdersListService) { }

  ngOnInit() {
    this.getOrderDetails();
  }

  getOrderDetails(){

    this.page={
      pageNo:this.p,
      itemsPerPage:5
    };

    this.previousOrders.getBillData(this.page).subscribe(result =>{
      console.log(result)
      this.previousBills=result["rows"];
      console.log('total',result["rows"][0]["items"][0]["ProductModel"].Name);
      this.total=result["count"];
    });

    /*
    console.log('total',result["rows"][0]["items"][0]["ProductModel"].Name);

          console.log('total',result["rows"][0]["items"][0]["ProductModel"].length());
    console.log(this.page);
    this.previousOrders.getBillItemData(this.page).subscribe(result =>{
      console.log('finally::')

       this.previousBills=result;
      console.log(this.previousBills);
      }
    )*/

  }

  getPage(data){
    this.p=data;
    console.log(this.p);
    this.page={
      pageNo:this.p,
      itemsPerPage:5
    };
    this.previousOrders.getBillData(this.page).subscribe(result =>{
        this.previousBills=result["rows"];
      }
    )
  }

}


export class Paginate {
  pageNo: number=1;
  itemsPerPage:number;
}
