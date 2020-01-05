import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

import { RestService } from '../rest/rest.service';
import { IPatient } from 'src/interfaces/patient.interface';
import { filter } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PatientService extends RestService {
  private relativeUrl: string = '/patients/';

  private patient: BehaviorSubject<IPatient> = new BehaviorSubject(null);
  currentPatient = this.patient.asObservable();

  constructor(protected httpClient: HttpClient) { super(httpClient); }

  changePatient(patient: IPatient) {
    this.patient.next(patient);
  }

  getPatients(firstName: string = '', lastName: string = ''): Observable<IPatient[]> {
    return this.getList(this.relativeUrl);
  }

  getPatient(id: number): Observable<IPatient> {
    return this.get(`${this.relativeUrl}${id.toString()}`);
  }

  addPatient(patient: IPatient): Observable<IPatient> {
    return this.post(this.relativeUrl, patient);
  }

  updatePatient(patient: IPatient): Observable<void> {
    return this.put(`${this.relativeUrl}/${patient.id}`, patient);
  }

  deletePatient(id: number): Observable<void> {
    return this.delete(this.relativeUrl, id);
  }
}