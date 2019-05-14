import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {QueryApi} from "../commonServices/request/QueryApi";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PreviousOrdersListService {

  constructor(private queryApi: QueryApi) { }

  getBillData(pageData): Observable <any> {
    let req;

    return this.queryApi.doGet('BILLDATA', pageData)
      .pipe(
        catchError(err => of([err]))
      );
  }

  //getBillDataBySpecificCoulmn

  getBillDataBySpecificCoulmn(pageData): Observable <any> {
    let req;

    return this.queryApi.doGet('SEARCHBYCOULMNBILLDATA', pageData)
      .pipe(
        catchError(err => of([err]))
      );
  }

  //searchByDate
  searchByDate(page,itemsPerPage,date): Observable <any> {
    let req;

    return this.queryApi.doGet('SEARCHBYDATE', {"date":date,"page":page,"itemsPerPage":itemsPerPage})
      .pipe(
        catchError(err => of([err]))
      );
  }

  searchByMaxOfPrice(pageNo,itemsPerPage,maxPrice,greaterThan): Observable <any> {
    let req;

    return this.queryApi.doGet('SEARCHBYMAXPRICE', {"pageNo":pageNo,"itemsPerPage":itemsPerPage,"max":maxPrice,"priceType":greaterThan})
      .pipe(
        catchError(err => of([err]))
      );
  }


  getBillDataById(pageData): Observable <any> {
    let req;

    return this.queryApi.doGet('BILLDATABYID', pageData)
      .pipe(
        catchError(err => of([err]))
      );
  }


  getBillItemData(pageData): Observable <any> {
    let req;

    return this.queryApi.doGet('BILLITEMDATA', pageData)
      .pipe(
        catchError(err => of([err]))
      );
  }
}
