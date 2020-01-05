import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AllergyService } from 'src/core/services/allergy/allergy.service';
import { BaseListComponent } from 'src/shared/components/base-list/base-list.component';
import { IColumn } from 'src/interfaces/column.interface';
import { IId } from 'src/interfaces/id.interface';
import { LookupTablesRoutes } from 'src/lookup-tables/enums/routes.enum';

@Component({
  selector: 'lookup-tables-allergy-list',
  templateUrl: './allergy-list.component.html',
  styleUrls: ['./allergy-list.component.css']
})
export class AllergyListComponent extends BaseListComponent {
  list: IId[];
  modulePath: string = LookupTablesRoutes.moduleRoute;
  allowDelete: boolean = true;
  allowEdit: boolean = true;
  relativeRoute: string = LookupTablesRoutes.allergies;
  columnList: IColumn[] = [
    { header: 'Id', cellControlType: 'span', spanText: 'id' },
    { header: 'Name', cellControlType: 'span', spanText: 'name' },
    { header: 'Test', cellControlType: 'span', spanText: 'test' }
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
