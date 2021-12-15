import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  public userChanges = new Subject<User>();

  constructor(private http: HttpClient) {}

  getUser(): Observable<User> {
    return this.http.get<User>(`${environment.apiUrl}/users/1`);
  }

  updateUser(user: User): Observable<User> {
    this.userChanges.next(user);

    return this.http.put<User>(`${environment.apiUrl}/users/1`, user);
  }
}
