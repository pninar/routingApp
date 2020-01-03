import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ILookupItem } from 'src/interfaces/lookup-item.interface';

@Component({
  selector: 'lookup-tables-base-list',
  templateUrl: './base-list.component.html',
  styleUrls: ['./base-list.component.css']
})
export abstract class BaseListComponent implements OnInit {
  protected list: ILookupItem[];
  protected modulePath: string = 'lookup-tables';
  abstract allowDelete: boolean;
  abstract allowEdit: boolean;
  abstract relativeRoute: string;

  abstract getList(): void;
  abstract delete(id: number): void;

  constructor(protected router: Router) { }

  ngOnInit() {
    this.getList();
  }

  edit(id: number) {
    this.router.navigate([{ outlets: { primary: this.modulePath + '/' + this.relativeRoute + '/' + id.toString() } }]);
  }

}
