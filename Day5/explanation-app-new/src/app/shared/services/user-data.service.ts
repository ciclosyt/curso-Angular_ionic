import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const USER: User = {
  name: 'Jose Antonio Postigo',
  birthDate: '1985-05-10',
  sex: 'male',
  phone: 2324,
  email: 'japostigo@atsistemas.com',
  id: 1,
};

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  constructor(private http: HttpClient) {}

  getStaticUser(): User {
    return USER;
  }

  getUser(): Observable<User> {
    return this.http.get<User>(`${environment.baseApi}/users/1`);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${environment.baseApi}/users/1`, user);
  }
}
