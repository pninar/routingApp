import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RestService } from '../rest/rest.service';
import { IUser } from 'src/interfaces/user.interface';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService extends RestService {
  private relativeUrl: string = '/users/';

  constructor(protected httpClient: HttpClient) { super(httpClient); }

  getUsers(ignoreCachedData: boolean = false): Observable<IUser[]> {
    return this.getList(this.relativeUrl, ignoreCachedData);
  }

  getUser(id: number): Observable<IUser> {
    return this.get(`${this.relativeUrl}${id.toString()}`);
  }

  addUser(user: IUser): Observable<IUser> {
    return this.post(this.relativeUrl, user);
  }

  updateUser(user: IUser): Observable<void> {
    return this.put(`${this.relativeUrl}/${user.id}`, user);
  }

  deleteUser(id: number): Observable<void> {
    return this.delete(this.relativeUrl, id);
  }
}