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
  searchingbyName:any;
  searchingbyDay:any;
  searchingbyPrice:any;
  searchSpecific:SearchBySpecificValue;
  constructor(private searchData :SearchService, private previousOrders :PreviousOrdersListService,private router: Router) { }

  ngOnInit() {
    this.getOrderDetails();
  }

  ResultDataAfterSearchByName(){      //----------searching and paginating by name----------------------//
      this.searchSpecific={
        pageNo:this.p,
        itemsPerPage:4,
        searchCoulmnName:'purchasedBy',
        search:this.searchingbyName
      }
      this.previousOrders.getBillDataBySpecificCoulmn(this.searchSpecific).subscribe( result =>{
        this.previousBills=result["rows"];
        this.total=result["count"];
      })
  }
  ResultDataAfterSearchbyDay(){
    this.searchSpecific={
      pageNo:this.p,
      itemsPerPage:4,
      searchCoulmnName:'purchasedOn',
      search:this.searchingbyDay
    }
    this.previousOrders.getBillDataBySpecificCoulmn(this.searchSpecific).subscribe( result =>{
      this.previousBills=result["rows"];
      this.total=result["count"];
    })

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

  getPage(data){//----getting next page in pagination------------------------//
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
  ResultDataAfterSearch(){//
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
export class SearchBySpecificValue{
  pageNo:number;
  itemsPerPage:number;
  searchCoulmnName:string;
  search:string;
}
