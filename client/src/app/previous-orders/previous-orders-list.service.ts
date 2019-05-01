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

  getBillData(): Observable <any> {
    let req;
    return this.queryApi.doGet('BILLDATA', req)
      .pipe(
        catchError(err => of([err]))
      );
  }
}
