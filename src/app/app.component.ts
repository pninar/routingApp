import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from 'src/core/services/authenticaton/authentication.service';
import { IUser } from 'src/interfaces/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Application Name';
  user: IUser;

  constructor(private authenticationService: AuthenticationService,
    private router: Router) {
  }

  ngOnInit() {
    this.authenticationService.currentUser.subscribe(user => this.user = user)
  }

  isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['login']);
  }
}
