import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StoredDocumentsService {

  constructor(private http: HttpClient) { }
  indexFolder(): Observable<any> {
    return this.http.post('/api/folder/index.json', {});
  }
  
  view(id: number): Observable<any>{
    return this.http.post('/api/folder/view.json', {id});
  }

  getCatsFiles(id): Observable<any>{
    return this.http.post('/api/files/getFiles.json', {id});
  }

  getFile(id): Observable<any>{
    return this.http.post('/api/files/view.json', {id});
  }

  save(data): Observable<any>{
    return this.http.post('/api/files/edit.json', {data});
  }

  delete(id): Observable<any>{
    return this.http.post('/api/files/delete.json', {id});
  }

  add(data): Observable<any>{
    return this.http.post('/api/files/add.json', {data});
  }

  getAllUsers():Observable<any>{
    return this.http.post('/api/files/get-all-users.json', {});
  }

  share(file_id, uid): Observable<any>{
    return this.http.post('/api/files/share-with.json', {file_id, uid});
  }

  unshare(file_id, uid): Observable<any>{
    return this.http.post('/api/files/unshare-with.json', {file_id, uid});
  }

  addFoler(data): Observable<any>{
    return this.http.post('/api/folder/add.json', {data});
  }

  addCate(data): Observable<any>{
    return this.http.post('/api/categories/add.json', {data});
  }
}
