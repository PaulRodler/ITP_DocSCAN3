import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getcsrf(): Observable<any> {
    return this.http.get<any>("/api/users/getcsrf.json");
  }
}
