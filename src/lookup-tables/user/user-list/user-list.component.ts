import { Component, OnInit } from '@angular/core';

import { ILookupItem } from 'src/interfaces/lookup-item.interface';
import { Router } from '@angular/router';
import { UserService } from 'src/core/services/users/user.service';

@Component({
  selector: 'lookup-tables-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  list: ILookupItem[];

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit() {
    this.getList();
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

  edit(id: number) {
    this.router.navigate([{ outlets: { primary: 'lookup-tables/users/' + id.toString() } }]);
  }

}

