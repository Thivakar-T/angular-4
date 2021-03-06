import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatagoryService {
  private url ='https://5ff6a887e7164b0017e19873.mockapi.io/catagory/'
  constructor(private http : HttpClient) { }
  addStudent(data :any){
    return this.http.post<any>(this.url,data);
    }
  
    getAllStudents(){
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
