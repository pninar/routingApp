import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';

import { IUser } from 'src/interfaces/user.interface';
import { User } from 'src/models/user.model';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private currentUser: User = null;
  baseUrl = 'localhost:3000/users';

  constructor(private httpClient: HttpClient) { console.log('AuthenticationService created'); }

  getUsers(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(this.baseUrl);
  }

  getUser(id: number): Observable<IUser> {
    return this.httpClient.get<IUser>(`${this.baseUrl}/${id}`);
  }

  addUser(user: IUser): Observable<IUser> {
    return this.httpClient.post<IUser>(this.baseUrl, user,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      });
  }

  updateUser(user: IUser): Observable<void> {
    return this.httpClient.put<void>(`${this.baseUrl}/${user}`,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      });
  }

  deleteUser(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
  }

  public isLoggedIn(): boolean {
    return this.currentUser != null;
  }

  login(username, password) {
    // console.log(this.getUsers());
    // console.log('todo: put in log function');
    this.currentUser = new User();
    this.currentUser.Name = username;
  }

  logout() {
    this.currentUser = null;
  }
}