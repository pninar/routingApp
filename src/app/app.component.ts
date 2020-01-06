import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from 'src/core/services/authenticaton/authentication.service';
import { IUser } from 'src/interfaces/user.interface';
import { UtilityService } from 'src/core/services/utility/utility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  brand = 'Application Name';
  moduleTitle = ''
  user: IUser;

  constructor(private authenticationService: AuthenticationService,
    private utilityService: UtilityService,
    private router: Router) {
  }

  ngOnInit() {
    this.authenticationService.currentUser.subscribe(user => this.user = user)
    this.utilityService.currentModuleTitle.subscribe(moduleTitle => this.moduleTitle = moduleTitle)
  }

  isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['login']);
  }
}
