import { Injectable } from '@angular/core';
//import {User} from './user';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  public loggedIn: boolean;
  public authToken: String;

  //public actUser: User = new User();

  constructor() { }
}
