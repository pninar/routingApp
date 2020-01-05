import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { IColumn } from 'src/interfaces/column.interface';

@Component({
  selector: 'shared-lookup-list',
  templateUrl: './lookup-list.component.html',
  styleUrls: ['./lookup-list.component.css']
})
export class LookupListComponent implements OnInit {
  @Input() list: any[];
  @Input() allowDelete: boolean = true;
  @Input() allowEdit: boolean = true;
  @Input() columnList: IColumn[] = [];
  @Output() delete = new EventEmitter();
  @Output() edit = new EventEmitter();
  @Output() itemClick = new EventEmitter();

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
    this.itemClick.emit({ id: id, buttonText: buttonText });
  }

  getItemValue(item: any, propertyName: string): any {
    return Reflect.get(item, propertyName); // 1
  }
}
