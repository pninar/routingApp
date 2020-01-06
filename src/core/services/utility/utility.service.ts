import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  private moduleTitle$ = new BehaviorSubject(null);
  currentModuleTitle = this.moduleTitle$.asObservable();

  constructor() { }

  changeCurrentModuleTitle(title: string) {
    this.moduleTitle$.next(title);
  }
}
