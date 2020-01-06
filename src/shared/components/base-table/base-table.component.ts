import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { IColumn } from 'src/interfaces/column.interface';
import { IColumnButtonClickItem } from 'src/interfaces/column-button-click-item.interface';

@Component({
  selector: 'shared-base-table',
  templateUrl: './base-table.component.html',
  styleUrls: ['./base-table.component.css']
})
export class BaseTableComponent implements OnInit {
  @Input() list: any[];
  @Input() allowDelete: boolean = true;
  @Input() allowEdit: boolean = true;
  @Input() columnList: IColumn[] = [];
  @Output() delete = new EventEmitter();
  @Output() edit = new EventEmitter();
  @Output() itemButtonClickEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  deleteButtonClick(id: number) {
    this.delete.emit(id);
  }

  editButtonClick(id: number) {
    this.edit.emit(id);
  }

  itemButtonClick(buttonText: string, id: number) {
    let item: IColumnButtonClickItem = { id: id, buttonText: buttonText };
    this.itemButtonClickEvent.emit(item);
  }

  getItemValue(item: any, propertyName: string): any {
    return Reflect.get(item, propertyName); // 1
  }
}
