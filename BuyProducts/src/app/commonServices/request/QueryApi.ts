import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserEndPoint} from "./userEndPoint";

@Injectable()
export class QueryApi {
  constructor(private http: HttpClient) { }

  doGet(url: string,  params: any) {
    url = UserEndPoint(url);
    return this.http.get(url, {params: params});
  }


  doPost(url: string, params: any, headers?: any) {
    console.log('in query api');
    console.log('params',params);
    url = UserEndPoint(url);
    console.log('query api dopost');
    console.log(url+':'+params);
    return this.http.post(url, params, headers);
    //return this.Post(url, params, headers);
    //return this.http.
  }

}
