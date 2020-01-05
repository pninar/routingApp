import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LookupTablesApiUrls } from '../enums/api-urls .enum';
import { IColumn } from 'src/interfaces/column.interface';
import { IId } from 'src/interfaces/id.interface';

@Component({
  selector: 'lookup-tables-base-list',
  templateUrl: './base-list.component.html',
  styleUrls: ['./base-list.component.css']
})
export abstract class BaseListComponent implements OnInit {
  protected list: IId[];
  protected modulePath: string = 'lookup-tables';
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
    this.router.navigate([{ outlets: { primary: LookupTablesApiUrls.baseUrl + '/' + this.relativeRoute + '/' + id.toString() } }]);
  }

}
