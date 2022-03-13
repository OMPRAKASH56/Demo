import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(public http: HttpClient) {}
  
  body:any;
  registerApi(user:any){
    return this.http.post<any>('http://127.0.0.1:8000/api/add-member',user);
  }
  loginApi(data:any){

  }
}
