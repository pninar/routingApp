import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

import { RestService } from '../rest/rest.service';
import { IUser } from 'src/interfaces/user.interface';

@Injectable({ providedIn: 'root' })
export class AuthenticationService extends RestService {
  private relativeUrl: string = '/users/';
  private userLoggedIn: boolean = false;

  private user$ = new BehaviorSubject(null);
  currentUser = this.user$.asObservable();

  constructor(protected httpClient: HttpClient) { super(httpClient); }

  changeUser(user: IUser) {
    this.user$.next(user);
  }

  setUserLoggedIn(value: boolean): void {
    this.userLoggedIn = value;
  }

  isLoggedIn(): boolean {
    return this.userLoggedIn;
  }

  getUserWithNameAndPassword(username: string, password: string): Observable<IUser[]> {
    return this.getWithParamters(`${this.relativeUrl}?userName=${username}&password=${password}`);
  }

  login(user: IUser) {
    this.changeUser(user);
    this.setUserLoggedIn(true);
  }

  logout() {
    this.setUserLoggedIn(false);
  }
}