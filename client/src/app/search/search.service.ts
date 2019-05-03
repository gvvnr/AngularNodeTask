import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {QueryApi} from "../commonServices/request/QueryApi";
import {catchError} from "rxjs/operators";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private queryApi: QueryApi) { }
  getProductData(): Observable <any> {
    let req;
     return this.queryApi.doGet('PRODUCTDATA', req)
       .pipe(
         catchError(err => of([err]))
       );
  }

  getImage(): Observable <any> {
    let req;
    return this.queryApi.doGet('GET_IMAGE', req)
      .pipe(
        catchError(err => of([err]))
      );
  }


  createItemData(ItemData,billData): Observable <any>{
    let req;
    console.log('in service');

    return this.queryApi.doPost('INSERT_ITEM_DATA',{"itemValues":ItemData,"billId":billData}).pipe(map(
      res =>{console.log(res,'res');
      return res;
      })
      ,catchError((err) =>
        err
      )
    );
  }
  bulkCreateItemData(ItemData,billData): Observable <any>{
    let req;
    console.log('In bulk create  service');

    return this.queryApi.doPost('BULK_INSERT_ITEM_DATA',{"itemValues":ItemData,"billId":billData}).pipe(map(
      res =>{console.log(res,'res');
        return res;
      })
      ,catchError((err) =>
        err
      )
    );
  }


  createBillData(billData): Observable <any>{
    let req;

    return this.queryApi.doPost('INSERT_BILL_DATA',billData).pipe(map(
      res =>{
        console.log(res,'respo....');
        return res;
      })
      ,catchError((err) =>
        err
      )
    );
  }
}
