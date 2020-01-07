import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from 'src/core/services/authenticaton/authentication.service';
import { IUser } from 'src/interfaces/user.interface';
import { UtilityService } from 'src/core/services/utility/utility.service';
import { ISideMenuLink } from 'src/shared/components/side-menu/side-menu-link.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  brand = 'Application Name';
  moduleTitle = ''
  user: IUser;
  sideBarLinks: ISideMenuLink[] = [];

  constructor(private authenticationService: AuthenticationService,
    private utilityService: UtilityService,
    private router: Router) {
  }

  ngOnInit() {
    this.authenticationService.currentUser.subscribe(user => this.user = user);
    this.utilityService.currentModuleTitle.subscribe(moduleTitle => this.moduleTitle = moduleTitle);
    this.utilityService.currentSideBarLinks.subscribe(sideBarLinks => this.sideBarLinks = sideBarLinks);
  }

  isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }

  logout() {
    this.authenticationService.logout();
    this.utilityService.changeCurrentModuleTitle('');
    this.router.navigate(['login']);
  }
}
