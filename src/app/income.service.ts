import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IncomeService {
  private url ='https://5ff6a887e7164b0017e19873.mockapi.io/income/'
  constructor(private http : HttpClient) { }
  add(data :any){
    return this.http.post<any>(this.url,data);
    }
  
    getAll(){
      return this.http.get<any>(this.url);
      }
      getOneData(id :any){
        return this.http.get<any>(this.url + '/' + id );
      }   
      editOneData(id :any,data:any){
        return this.http.put<any>(this.url + '/' + id,data);
      }
  
      removeOneData(id:any){
        return this.http.delete<any>(this.url + '/' + id);
      }
  
  }
