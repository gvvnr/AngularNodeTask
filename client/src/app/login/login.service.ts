import {EventEmitter, Injectable, Output} from '@angular/core';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {QueryApi} from '../commonServices/request/QueryApi';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  @Output() getLoggedInDetails: EventEmitter<any> = new EventEmitter();

  constructor(private queryApi: QueryApi) { }

  authenticateLoginData(loginDetails): Observable <any> {// -----gets all rows having specific category and color from database
    console.log('llooogging in:');
    return this.queryApi.doGet('LOGIN',  loginDetails).pipe(
      map(
      res => {
        console.log('result');
        //this.getLoggedInDetails = res;
        return res;
      }
      , catchError((err) =>
        err
      )
    ));
  }

  logout() {
    //this.getLoggedInDetails = null;
    localStorage.removeItem('currentUser');

  }

  public get loggedIn(): boolean {
    return (localStorage.getItem('currentUser') !== null);
  }
}
