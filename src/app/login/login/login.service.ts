import { HttpClient, HttpXsrfTokenExtractor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginInputs } from './login-inputs.models';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  headers: Headers = new Headers({
    'Content-Type': 'application/json',
  });


  constructor(private http: HttpClient, private tokenExtractor: HttpXsrfTokenExtractor) {
    const headers =this.headers
  }
  getcsrf(): Observable<any> {
    return this.http.get<any>("/api/users/getcsrf.json");
  }

  login(inputs: LoginInputs): Observable<any>{
    
    return this.http.post<any>("/api/users/token.json", {'username':inputs.email, 'password':inputs.pwd});
  }
  
  logout(): Observable<any>{
    return this.http.get<any>("/api/users/logout.json", {});
  }
}