import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonalDataService {

  constructor(private http: HttpClient) { }


  index(): Observable<any>{
    return this.http.post('/api/users/view.json', {});
  }

  edit(data): Observable<any>{
    return this.http.post('/api/users/edit.json', {data});
  }
}
