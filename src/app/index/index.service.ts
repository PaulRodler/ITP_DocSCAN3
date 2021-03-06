import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IndexService {

  constructor(private http: HttpClient) { }

  allFolder(): Observable<any>{
    return this.http.post('/api/folder/index.json', {});
  }
  viewFolder(id: number): Observable<any>{
    return this.http.post('/api/folder/view.json', {id});
  }

  getUserData(): Observable<any>{
    return this.http.post('/api/users/index.json', {});
  }

  getLastOpenCats(): Observable<any>{
    return this.http.post('/api/categories/index.json', {});
  }

}
