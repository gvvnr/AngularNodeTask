import { Component, OnInit } from '@angular/core';
import { SearchService} from '../search/search.service'
import {PreviousOrdersListService} from './previous-orders-list.service'
import {Router,NavigationExtras} from "@angular/router";
//import { Data } from "../../providers/data/data";

@Component({
  selector: 'app-previous-orders',
  templateUrl: './previous-orders.component.html',
  styleUrls: ['./previous-orders.component.sass']
})
export class PreviousOrdersComponent implements OnInit {
  previousBills:any;
  p: number = 1;
  page:Paginate;
  total:number;
  rows:any[];
  searchingItem:any
  constructor(private searchData :SearchService, private previousOrders :PreviousOrdersListService,private router: Router) { }

  ngOnInit() {
    this.getOrderDetails();
  }

  getOrderDetails(){

    this.page={
      pageNo:this.p,
      itemsPerPage:4,
      search:'',
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
      itemsPerPage:5,
      search:''
    };
    this.previousOrders.getBillData(this.page).subscribe(result =>{
        this.previousBills=result["rows"];
      }
    )
  }
  ResultDataAfterSearch(){
    this.page={
      pageNo:this.p,
      itemsPerPage:5,
      search:this.searchingItem
    };
    this.previousOrders.getBillData(this.page).subscribe(result =>{
        this.previousBills=result["rows"];
      }
    )
    console.log(this.searchingItem);
  }

  details(data){

/*
    console.log(data["items"],'items::');
    let navigationExtras: NavigationExtras = {
      queryParams: data.id
    };
    console.log(navigationExtras);
*/
    this.router.navigate(['/specificOrderDetails'],{queryParams:{id:data.id}});

  }


}


export class Paginate {
  pageNo: number=1;
  itemsPerPage:number;
  search:string;
}
