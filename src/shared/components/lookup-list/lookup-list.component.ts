import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ILookupItem } from 'src/interfaces/lookup-item.interface';

@Component({
  selector: 'shared-lookup-list',
  templateUrl: './lookup-list.component.html',
  styleUrls: ['./lookup-list.component.css']
})
export class LookupListComponent implements OnInit {
  @Input() list: ILookupItem[];
  @Output() delete = new EventEmitter();
  @Output() edit = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  deleteButtonClick(id: number) {
    this.delete.emit(id);
  }

  editButtonClick(id: number) {
    this.edit.emit(id);
  }

}
