// based on: https://codeburst.io/angular-best-practices-4bed7ae1d0b7

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

const baseUrl = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export abstract class RestService {
  private data: Observable<any[]>;

  constructor(protected httpClient: HttpClient) {
    console.log(this.httpClient);
  }

  protected get headers(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  protected get(relativeUrl: string): Observable<any> {
    return this.httpClient.get<any>(`${baseUrl + relativeUrl}`);
  }

  // chached version
  protected getList(relativeUrl: string): Observable<any[]> {
    if (!this.data) {
      this.data = this.httpClient.get<any[]>(baseUrl + relativeUrl).pipe(shareReplay(1));
    }
    return this.data;
  }

  // non chached version
  // protected getList(relativeUrl: string): Observable<any[]> {
  //   return this.httpClient.get<any[]>(baseUrl + relativeUrl);

  //   return this.users;
  // }

  protected post(relativeUrl: string, data: any): Observable<any> {
    return this.httpClient.post<any>(baseUrl + relativeUrl, data, httpOptions);
  }

  protected put(relativeUrl: string, data: any): Observable<void> {
    return this.httpClient.put<void>(`${baseUrl + relativeUrl}`, data, httpOptions);
  }

  protected delete(relativeUrl: string, id: number): Observable<void> {
    return this.httpClient.delete<void>(`${baseUrl + relativeUrl}/${id}`);
  }
}