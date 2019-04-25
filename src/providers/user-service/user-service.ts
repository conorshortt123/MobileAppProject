import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class UserServiceProvider {

  constructor(private http: HttpClient) {
    console.log('Hello UserServiceProvider Provider');
  }

  getUsers():Observable<any> {
    return this.http.get("https://randomuser.me/api/?results=30")
    .do(this.logRes)
  }
 
  logRes(res: Response) {
    console.log(res);
  }
}
