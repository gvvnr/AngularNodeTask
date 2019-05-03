import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {QueryApi} from "../commonServices/request/QueryApi";
import {catchError} from "rxjs/operators";
import { map } from 'rxjs/operators';

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

  getBillItemData(pageData): Observable <any> {
    let req;
    return this.queryApi.doGet('BILLITEMDATA', pageData)
      .pipe(
        catchError(err => of([err]))
      );
  }
}
