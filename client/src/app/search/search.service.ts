import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {QueryApi} from '../commonServices/request/QueryApi';
import {catchError} from 'rxjs/operators';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private queryApi: QueryApi) { }


  RegistrationFormInsertData(registrationFormData): Observable <any> {
    console.log('service');
    return this.queryApi.doPost('REGISTRATIONFORMINSERT', registrationFormData).pipe(map(
      res => {
        console.log('result');
        return res;
      })
      , catchError((err) =>
        err
      )
    );
  }
  getProductData(): Observable <any> {// -----gets all rows of product details from database
    let req;
    return this.queryApi.doGet('PRODUCTDATA', req)
       .pipe(
         catchError(err => of([err]))
       );
  }
  // getProductByCategory
  getProductByCategoryAndColor(category, Blue, Green, White): Observable <any> {// -----gets all rows having specific category and color from database

    return this.queryApi.doGet('PRODUCTCATEGORYANDCOLOR',  {category: category, Blue: Blue, Green: Green, White: White})
      .pipe(
        catchError(err => of([err]))
      );
  }

  getProductByCategory(category): Observable <any> {// -----gets all rows of product details from database

    return this.queryApi.doGet('PRODUCTCATEGORY',  {category: category})
      .pipe(
        catchError(err => of([err]))
      );
  }

  createItemData(ItemData, billData): Observable <any> {
    let req;

    return this.queryApi.doPost('INSERT_ITEM_DATA', {itemValues: ItemData, billId: billData}).pipe(map(
      res => {
      return res;
      })
      , catchError((err) =>
        err
      )
    );
  }
  bulkCreateItemData(ItemData, billData): Observable <any> {
    let req;
    return this.queryApi.doPost('BULK_INSERT_ITEM_DATA', {itemValues: ItemData, billId: billData}).pipe(map(
      res => {
        return res;
      })
      , catchError((err) =>
        err
      )
    );
  }


  createBillData(billData): Observable <any> {
    let req;

    return this.queryApi.doPost('INSERT_BILL_DATA', billData).pipe(map(
      res => {
        console.log(res, 'respo....');
        return res;
      })
      , catchError((err) =>
        err
      )
    );
  }
}
