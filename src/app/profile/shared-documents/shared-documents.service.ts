import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDocumentsService {

  constructor(private http: HttpClient) { }

  indexShared(): Observable<any>{
    return this.http.post('/api/files/get-shared.json', {});
  }
}
