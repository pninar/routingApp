import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AllergyService } from 'src/core/services/allergy/allergy.service';
import { BaseListComponent } from 'src/lookup-tables/base-list/base-list.component';
import { LookupTablesApiUrls } from 'src/lookup-tables/enums/api-urls .enum';
import { IColumn } from 'src/interfaces/column.interface';
import { IId } from 'src/interfaces/id.interface';

@Component({
  selector: 'lookup-tables-allergy-list',
  templateUrl: './allergy-list.component.html',
  styleUrls: ['./allergy-list.component.css']
})
export class AllergyListComponent extends BaseListComponent {
  list: IId[];
  allowDelete: boolean = true;
  allowEdit: boolean = true;
  relativeRoute: string = LookupTablesApiUrls.allergies;
  columnList: IColumn[] = [
    { header: 'Id', dataPropertyName: 'id' },
    { header: 'Name', dataPropertyName: 'name' },
    { header: 'Test', dataPropertyName: 'test' }
  ];

  constructor(private allergyService: AllergyService,
    protected router: Router) {
    super(router);
  }

  getList() {
    this.allergyService.getAllergies(true).subscribe(
      (list) => {
        this.list = list;
      },
      (err) => console.log(err)
    );
  }

  delete(id: number) {
    this.allergyService.deleteAllergy(id).subscribe(
      () => this.getList(),
      (err: any) => console.log(err)
    );
  }
}
