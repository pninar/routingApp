import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { AuthenticationService } from 'src/core/services/authenticaton/authentication.service';
import { IUser } from 'src/interfaces/user.interface';
import { BaseFormComponent } from 'src/shared/components/base-form/base-form.component';

@Component({
  selector: 'authentication-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends BaseFormComponent implements OnInit {
  frm: FormGroup;
  pageTitle: string = 'Login';

  // variable validationMessage stores the error message for each validation rule for each formControl
  validationMessages = {
    "userName": {
      "required": "Name is required",
    },
    "password": {
      "required": "Password is required",
    },
  }

  // variable formErrors stores the current error message for each formControl
  formErrors = {
    'userName': '',
    'password': '',
  }

  constructor(private authenticationService: AuthenticationService,
    private router: Router,
    protected fb: FormBuilder) {
    super(fb);
  }

  initForm() {
    this.frm = this.fb.group(
      {
        userName: ['', Validators.required],
        password: ['', Validators.required],
      }
    );
  }

  onSubmit(): void {
    let userName = this.frm.get("userName").value;
    let password = this.frm.get("password").value;

    this.login(userName, password);
  }

  login(userName: string, password: string) {
    this.authenticationService.getUserWithNameAndPassword(userName, password)
      .subscribe(
        (users: IUser[]) => {
          let user = users.length == 0 ? null : <IUser>users[0];

          if (user) {
            this.authenticationService.login(user);
            this.router.navigate(['home']);
          }
          else
            alert("No such user!");
        }
      );
  }
}
