import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ISideMenuLink } from 'src/shared/components/side-menu/side-menu-link.interface';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  private moduleTitle$ = new BehaviorSubject(null);
  currentModuleTitle = this.moduleTitle$.asObservable();

  private sideBarLinks$ = new BehaviorSubject(null);
  currentSideBarLinks = this.sideBarLinks$.asObservable();

  constructor() { }

  changeCurrentModuleTitle(title: string) {
    this.moduleTitle$.next(title);
  }

  changeSideBarLinks(links: ISideMenuLink[]) {
    this.sideBarLinks$.next(links);
  }
}
