// based on: https://codeburst.io/angular-best-practices-4bed7ae1d0b7

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  protected getList(relativeUrl: string): Observable<any[]> {
    return this.httpClient.get<any[]>(baseUrl + relativeUrl);
  }

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