import { Component, OnInit } from '@angular/core';
import { SearchService} from '../search/search.service'
import {PreviousOrdersListService} from './previous-orders-list.service';
import {Router, NavigationExtras} from '@angular/router';
import {LocalStorage} from '@ngx-pwa/local-storage';
//import { Data } from "../../providers/data/data";

@Component({
  selector: 'app-previous-orders',
  templateUrl: './previous-orders.component.html',
  styleUrls: ['./previous-orders.component.sass']
})



export class PreviousOrdersComponent implements OnInit {
  previousBills: any;
  p: number = 1;
  page:Paginate;
  total: number;
  rows: any[];
  searchingItem: any;
  searchingbyName: any;
  searchingbyDay: any;
  searchingbyMinPrice: any;
  searchingbyMaxPrice: any;
  searchSpecific: SearchBySpecificValue;
  itemsPerPage = 4;
  searchingbyDate:any;//new Date();
  myFilter: any;
 constructor(private searchData: SearchService, private previousOrders: PreviousOrdersListService, private router: Router, private localstorage: LocalStorage) { }

  ngOnInit() {
    this.getOrderDetails();

  }

  ResultDataAfterSearchbyDate(){
    console.log('searching by date........');
    console.log(this.searchingbyDate);
    this.previousOrders.searchByDate(this.p,this.itemsPerPage,this.searchingbyDate).subscribe( result=>{

     this.previousBills=result["rows"];
      this.total=result["count"];

    });

  }

  ResultDataAfterSearchByName(){      //----------searching and paginating by name----------------------//
      this.searchSpecific={
        pageNo:this.p,
        itemsPerPage:4,
        searchCoulmnName:'purchasedBy',
        search:this.searchingbyName
      };
      this.previousOrders.getBillDataBySpecificCoulmn(this.searchSpecific).subscribe( result =>{
        this.previousBills=result["rows"];
        this.total=result["count"];
      });

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
  SearchByMax(){//--------getting rows for upto specified price
    this.previousOrders.searchByMaxOfPrice(this.p,this.itemsPerPage,this.searchingbyMaxPrice,'Max')
      .subscribe( result=>{
        this.previousBills=result["rows"];
        this.total=result["count"];
      });

  }
  SearchByMin(){
//searchingbyMinPrice
    this.previousOrders.searchByMaxOfPrice(this.p,this.itemsPerPage,this.searchingbyMinPrice,'Min')
      .subscribe( result=>{
        this.previousBills=result["rows"];
        this.total=result["count"];
      });
  }

  getOrderDetails(){
    this.page={
      pageNo:this.p,
      itemsPerPage:4,
      search:'',
    };
    console.log('HURRA');
    this.localstorage.getItem('Items').subscribe( result =>{
      console.log('RRRRKKKKKK:',result);
    });

    this.previousOrders.getBillData(this.page).subscribe(result =>{
      console.log(result)
      this.previousBills=result["rows"];
      console.log('total',result["rows"][0]["items"][0]["ProductModel"].Name);
      this.total=result["count"];
        this.myFilter = (d: Date): boolean => {///////gets date and verifies the condition in return statement and displays date based on given condition in the return statement
          return d<=(new Date());

        }

    });


  }

  getPage(data){//----getting next page in pagination------------------------//

    this.p=data;
    if(this.searchingItem){//getting to next page based on text entered in search box during pagination
      this.ResultDataAfterSearch();
      return;
    }
    else if(this.searchingbyDate){
      this.ResultDataAfterSearchbyDate();
      return;
    }
    else if(this.searchingbyName){
      this.ResultDataAfterSearchByName();
      return;
    }
    else if(this.searchingbyDay){
      this.ResultDataAfterSearchbyDay();
      return;
    }
    else if(this.searchingbyMaxPrice){
      this.SearchByMax();
      return;
    }
    else{// If no text is entered in any of the text fields to filter for pagination then by default  else will be called
      this.page={
        pageNo:this.p,
        itemsPerPage:4,
        search:''
      };
      this.previousOrders.getBillData(this.page).subscribe(result =>{
          this.previousBills=result["rows"];
        }
      )

    }
  }
  ResultDataAfterSearch(){
    this.page={
      pageNo:this.p,
      itemsPerPage:4,
      search:this.searchingItem
    };
    this.previousOrders.getBillData(this.page).subscribe(result =>{
        this.previousBills=result["rows"];
      this.total=result["count"];
      }
    )
    console.log(this.searchingItem);
  }

  details(data){

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
