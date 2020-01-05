import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from 'src/core/services/users/user.service';
import { BaseListComponent } from 'src/shared/components/base-list/base-list.component';
import { IColumn } from 'src/interfaces/column.interface';
import { IId } from 'src/interfaces/id.interface';
import { LookupTablesRoutes } from 'src/lookup-tables/enums/routes.enum';

@Component({
  selector: 'lookup-tables-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent extends BaseListComponent {
  list: IId[];
  modulePath: string = LookupTablesRoutes.moduleRoute;
  allowDelete: boolean = true;
  allowEdit: boolean = true;
  relativeRoute: string = LookupTablesRoutes.users;
  columnList: IColumn[] = [
    { header: 'Id', cellControlType: 'span', spanText: 'id' },
    { header: 'User Name', cellControlType: 'span', spanText: 'userName' },
    { header: 'First Name', cellControlType: 'span', spanText: 'firstName' },
    { header: 'Last Name', cellControlType: 'span', spanText: 'lastName' }
  ];

  constructor(private userService: UserService,
    protected router: Router) {
    super(router);
  }

  getList() {
    this.userService.getUsers(true).subscribe(
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

