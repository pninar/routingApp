import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { RestService } from '../rest/rest.service';
import { IPatient } from 'src/interfaces/patient.interface';

@Injectable({ providedIn: 'root' })
export class PatientService extends RestService {
  private relativeUrl: string = '/patients/';

  constructor(protected httpClient: HttpClient) { super(httpClient); }

  getPatients(): Observable<IPatient[]> {
    // return this.httpClient.get<IPatient[]>(this.baseUrl);
    return this.getList(this.relativeUrl);
  }

  getPatient(id: number): Observable<IPatient> {
    return this.get(`${this.relativeUrl}${id.toString()}`);
    // return this.httpClient.get<IPatient>(`${this.baseUrl}/${id}`);
  }

  addPatient(patient: IPatient): Observable<IPatient> {
    return this.post(this.relativeUrl, patient);
    // return this.httpClient.post<IPatient>(this.baseUrl, patient, httpOptions);
  }

  updatePatient(patient: IPatient): Observable<void> {
    return this.put(`${this.relativeUrl}/${patient.id}`, patient);
    // return this.httpClient.put<void>(`${this.baseUrl}/${patient.id}`, patient, httpOptions);
  }

  deletePatient(id: number): Observable<void> {
    return this.delete(this.relativeUrl, id);
    // return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
  }
}