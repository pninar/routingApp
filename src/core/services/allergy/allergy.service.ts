import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { RestService } from '../rest/rest.service';

import { IAllergy } from 'src/interfaces/allergy.interface';

@Injectable({
  providedIn: 'root'
})
export class AllergyService extends RestService {
  private relativeUrl: string = '/allergies/';

  constructor(protected httpClient: HttpClient) { super(httpClient); }

  getAllergies(ignoreCachedData: boolean = false): Observable<IAllergy[]> {
    return this.getList(this.relativeUrl, ignoreCachedData);
  }

  getAllergy(id: number): Observable<IAllergy> {
    return this.get(`${this.relativeUrl}${id.toString()}`);
  }

  addAllergy(allergy: IAllergy): Observable<IAllergy> {
    return this.post(this.relativeUrl, allergy);
  }

  updateAllergy(allergy: IAllergy): Observable<void> {
    return this.put(`${this.relativeUrl}/${allergy.id}`, allergy);
  }

  deleteAllergy(id: number): Observable<void> {
    return this.delete(this.relativeUrl, id);
  }
}