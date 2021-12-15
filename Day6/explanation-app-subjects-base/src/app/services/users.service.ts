import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  public user$ = new Subject<User>();

  private readonly usersEndpoint = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  getUser(): Observable<User> {
    return this.http.get<User>(`${environment.apiUrl}/users/1`).pipe(
      tap((user) => {
        this.user$.next(user);
      })
    );
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${environment.apiUrl}/users/1`, user).pipe(
      tap(() => {
        this.user$.next(user);
      })
    );
  }
}
