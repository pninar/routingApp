import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from 'src/core/services/authenticaton/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Application Name';

  constructor(private authenticationService: AuthenticationService,
    private router: Router) {
  }

  isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['login']);
  }
}
