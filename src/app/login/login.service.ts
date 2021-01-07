import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url ='https://5ff6a887e7164b0017e19873.mockapi.io/signup/'
  constructor(private http : HttpClient) { }
  getUser(){
    return this.http.get(this.url)
    }
}
