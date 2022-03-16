import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseURL ='http://127.0.0.1:8000/api/add-member';
  userDataUrl ='http://127.0.0.1:8000/api/data';
  data:any;
  constructor(private http: HttpClient) { }
  registerApi(user:any): Observable<any> {
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(user);

    console.log(body);
    return this.http.post(this.baseURL, body,{'headers':headers});
  }
  loginApi(xyz:any){

  }
  userDataApi(){
    return this.http.get(this.userDataUrl);
  }
  

}
