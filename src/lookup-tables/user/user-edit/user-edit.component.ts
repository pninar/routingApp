import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { IUser } from 'src/interfaces/user.interface';
import { UserService } from 'src/core/services/users/user.service';
import { BaseEditComponent } from 'src/lookup-tables/base-edit/base-edit.component';
import { LookupTablesApiUrls } from 'src/lookup-tables/enums/api-urls .enum';

@Component({
  selector: 'lookup-tables-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent extends BaseEditComponent {
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

  frm: FormGroup;
  pageTitle: string;
  item: IUser;
  itemType: string = 'User';
  relativeRoute: string = LookupTablesApiUrls.users;

  constructor(protected router: Router,
    protected route: ActivatedRoute,
    protected fb: FormBuilder,
    private userService: UserService) {
    super(router, route, fb);
  }

  initForm() {
    this.frm = this.fb.group(
      {
        id: ['', [Validators.required]],
        name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
        password: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      }
    );
  }

  setNewItem() {
    // return a new and empty object.
    // make sure to set the id to null so the rest api will know to fill it in
    this.item = {
      id: null,
      name: '',
      password: '',
      firstName: '',
      lastName: ''
    };
  }

  setItemFromService(id: number) {
    this.userService.getUser(id).subscribe(
      (user: IUser) => {
        this.editItem(user);
        this.item = user;
      },
      (err: any) => console.log(err)
    );
  }

  update(): void {
    this.userService.updateUser(this.item).subscribe(
      () => this.routeToList(),
      (err: any) => console.log(err)
    );
  }

  add(): void {
    this.userService.addUser(this.item).subscribe(
      () => this.routeToList(),
      (err: any) => console.log(err)
    );
  }

  mapFormValuesToModel() {
    this.item.id = this.frm.value.id;
    this.item.name = this.frm.value.name;
  }
}
