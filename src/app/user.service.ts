import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import axios from 'axios';
import { IUser } from './Interface/IUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}
  // protected url = 'http://localhost:000';

  getUsers(): Observable<any> {
    return this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .pipe(map((res) => res));
  }

  getAxiosUsers() {
    return axios.get('https://jsonplaceholder.typicode.com/users');
  }
}
