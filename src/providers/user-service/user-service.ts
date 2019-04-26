import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class UserServiceProvider {

  constructor(private http: HttpClient) {
  }

  //Gets http data from the URL. "logRes" method displays data in console, I used this when fixing errors.
  getUsers():Observable<any> {
    return this.http.get("https://randomuser.me/api/?results=30")
    .do(this.logRes)
  }
 
  logRes(res: Response) {
    console.log(res);
  }
}
