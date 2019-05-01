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
  displayedColumns=['id','purchasedBy','total','purchasedOn','ListOfItems']
  constructor(private searchData :SearchService, private previousOrders :PreviousOrdersListService) { }

  ngOnInit() {
    this.getOrderDetails();
  }

  getOrderDetails(){
    this.previousOrders.getBillData().subscribe(result =>{
      this.previousBills=result;
      console.log(result);
    })

  }

}
