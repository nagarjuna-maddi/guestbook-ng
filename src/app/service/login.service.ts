import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Login } from '../model/login';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseURL = "http://localhost:8080/api/guestbookapp/login/";


  constructor(private httpClient: HttpClient) { }

  loginUser(login: Login): Observable<Object> {
    console.log("In login service..");

    console.log(this.baseURL+'loginUser');
    return this.httpClient.get(this.baseURL+'loginUser', {responseType: 'text'});
  }

}
