import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ILookupItem } from 'src/interfaces/lookup-item.interface';
import { UserService } from 'src/core/services/users/user.service';
import { BaseListComponent } from 'src/lookup-tables/base-list/base-list.component';

@Component({
  selector: 'lookup-tables-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent extends BaseListComponent {
  list: ILookupItem[];
  allowDelete: boolean = true;
  allowEdit: boolean = true;
  relativeRoute: string = 'users';

  constructor(private userService: UserService,
    protected router: Router) {
    super(router);
  }

  getList() {
    this.userService.getUsers().subscribe(
      (list) => {
        this.list = list;
      },
      (err) => console.log(err)
    );
  }

  delete(id: number) {
    this.userService.deleteUser(id).subscribe(
      () => this.getList(),
      (err: any) => console.log(err)
    );
  }
}

