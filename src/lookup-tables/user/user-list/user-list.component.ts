import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from 'src/core/services/users/user.service';
import { BaseListComponent } from 'src/lookup-tables/base-list/base-list.component';
import { LookupTablesApiUrls } from 'src/lookup-tables/enums/api-urls .enum';
import { IColumn } from 'src/interfaces/column.interface';
import { IId } from 'src/interfaces/id.interface';

@Component({
  selector: 'lookup-tables-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent extends BaseListComponent {
  list: IId[];
  allowDelete: boolean = true;
  allowEdit: boolean = true;
  relativeRoute: string = LookupTablesApiUrls.users;
  columnList: IColumn[] = [
    { header: 'Id', dataPropertyName: 'id' },
    { header: 'User Name', dataPropertyName: 'userName' },
    { header: 'First Name', dataPropertyName: 'firstName' },
    { header: 'Last Name', dataPropertyName: 'lastName' }
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

