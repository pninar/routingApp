import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ILookupItem } from 'src/interfaces/lookup-item.interface';
import { AllergyService } from 'src/core/services/allergy/allergy.service';
import { BaseListComponent } from 'src/lookup-tables/base-list/base-list.component';

@Component({
  selector: 'lookup-tables-allergy-list',
  templateUrl: './allergy-list.component.html',
  styleUrls: ['./allergy-list.component.css']
})
export class AllergyListComponent extends BaseListComponent {
  list: ILookupItem[];
  allowDelete: boolean = true;
  allowEdit: boolean = true;
  relativeRoute: string = 'allergies';

  constructor(private allergyService: AllergyService,
    protected router: Router) {
    super(router);
  }

  getList() {
    this.allergyService.getAllergies().subscribe(
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
