import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { AuthenticationService } from 'src/core/services/authenticaton/authentication.service';

@Component({
  selector: 'authentication-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

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
    private fb: FormBuilder) { }


  ngOnInit() {
    this.loginForm = this.fb.group(
      {
        userName: ['', Validators.required],
        password: ['', Validators.required],
      }
    );

    this.loginForm.valueChanges.subscribe((data) => {
      this.logValidationErrors(this.loginForm);
      console.log(this.formErrors);
    });
  }

  // function logValidationErrors loops through each control in the group parameter
  // if the control is itself a FormGroup, iterate on its controls
  // for each formControl:
  // 1. clear its previous errors
  // 2. log its current errors:
  // if it's not null and not valid, get its messages from validationMessages
  // for each error in the control's errors:
  // add the error to the controls key in formErrors
  logValidationErrors(group: FormGroup = this.loginForm): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);
      if (abstractControl instanceof FormGroup) {
        this.logValidationErrors(abstractControl);
      } else {
        this.formErrors[key] = ''; //clear previous validation errors

        if (abstractControl && !abstractControl.valid && (abstractControl.touched || abstractControl.dirty)) {
          const messages = this.validationMessages[key];
          for (const errorKey in abstractControl.errors) {
            if (errorKey) {
              this.formErrors[key] += messages[errorKey] + ' ';
            }
          }
        }
      }
    });
  }

  onSubmit(): void {
    console.log(this.loginForm.controls.userName.value);
    console.log(this.loginForm.get("password").value);
    this.login();
  }

  login() {
    this.authenticationService.login('', '');
    this.router.navigate(['home']);
  }
}
