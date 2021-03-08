import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IndexService {

  constructor(private http: HttpClient) { }

  allFolder(): Observable<any>{
    return this.http.post('/api/folder/index-folders.json', {});
  }
  viewFolder(id: number): Observable<any>{
    return this.http.post('/api/folder/view.json', {id});
  }

}
