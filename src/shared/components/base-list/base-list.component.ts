import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IColumn } from 'src/interfaces/column.interface';
import { IId } from 'src/interfaces/id.interface';

@Component({
  selector: 'shared-base-list',
  templateUrl: './base-list.component.html',
  styleUrls: ['./base-list.component.css']
})
export abstract class BaseListComponent implements OnInit {
  protected list: IId[];
  abstract modulePath: string;
  abstract allowDelete: boolean;
  abstract allowEdit: boolean;
  abstract relativeRoute: string;
  abstract columnList: IColumn[];

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
