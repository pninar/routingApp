import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { IUser } from 'src/interfaces/user.interface';
import { UserService } from 'src/core/services/users/user.service';

@Component({
  selector: 'lookup-tables-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  // variable validationMessage stores the error message for each validation rule for each formControl
  validationMessages = {
    "name": {
      "required": "Name is required.",
      "minlength": "Name must be greater than 2 characters.",
      "maxlength": "Name must be less than 10 characters.",
    },
    "password": {
      "required": "Password is required.",
      "minlength": "Password must be greater than 2 characters.",
      "maxlength": "Password must be less than 10 characters.",
    },
  }

  // variable formErrors stores the current error message for each formControl
  formErrors = {}

  userForm: FormGroup;
  user: IUser;
  pageTitle: string;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private userService: UserService) { }

  ngOnInit() {
    this.userForm = this.fb.group(
      {
        id: ['', [Validators.required]],
        name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
        password: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      }
    );

    this.userForm.valueChanges.subscribe((data) => {
      this.logValidationErrors(this.userForm);
    });

    this.route.paramMap.subscribe(params => {
      const id = +params.get('id')
      if (id) {
        this.pageTitle = 'Edit User';
        this.getUser(id);
      }
      else {
        this.pageTitle = 'Create User';
        // set the property to a new and empty object.
        // make sure to set the id to null so the rest api will know to fill it in
        this.user = {
          id: null,
          name: '',
          password: '',
          firstName: '',
          lastName: ''
        };
      }
    });
  }

  getUser(id: number) {
    this.userService.getUser(id).subscribe(
      (user: IUser) => {
        this.editAllergy(user);
        this.user = user;
      },
      (err: any) => console.log(err)
    );
  }

  editAllergy(user: IUser) {
    this.userForm.patchValue(user);
  }

  logValidationErrors(group: FormGroup = this.userForm): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);

      this.formErrors[key] = ''; //clear previous validation errors

      if (abstractControl && !abstractControl.valid && (abstractControl.touched || abstractControl.dirty || abstractControl.value !== '')) {
        const messages = this.validationMessages[key];
        for (const errorKey in abstractControl.errors) {
          if (errorKey) {
            this.formErrors[key] += messages[errorKey] + ' ';
          }
        }
      }

      if (abstractControl instanceof FormGroup) {
        this.logValidationErrors(abstractControl);
      }

      // if (abstractControl instanceof FormArray) {
      //   for (const control of abstractControl.controls) {
      //     if (control instanceof FormGroup) {
      //       this.logValidationErrors(control);
      //     }
      //   }
      // }
    });
  }

  onSubmit(): void {
    this.mapFormValuesToModel();

    if (this.user.id)
      this.update();
    else
      this.add();
  }

  update(): void {
    this.userService.updateUser(this.user).subscribe(
      () => this.router.navigate(['lookup-tables/users']),
      (err: any) => console.log(err)
    );
  }

  add(): void {
    this.userService.addUser(this.user).subscribe(
      () => this.router.navigate(['lookup-tables/users']),
      (err: any) => console.log(err)
    );
  }

  mapFormValuesToModel() {
    this.user.id = this.userForm.value.id;
    this.user.name = this.userForm.value.name;
  }
}
