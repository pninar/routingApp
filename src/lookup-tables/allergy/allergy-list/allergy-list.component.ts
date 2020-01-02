import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ILookupItem } from 'src/interfaces/lookup-item.interface';
import { AllergyService } from 'src/core/services/allergy/allergy.service';

@Component({
  selector: 'lookup-tables-allergy-list',
  templateUrl: './allergy-list.component.html',
  styleUrls: ['./allergy-list.component.css']
})
export class AllergyListComponent implements OnInit {
  list: ILookupItem[];

  constructor(private allergyService: AllergyService,
    private router: Router) { }

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.allergyService.getAllergies().subscribe(
      (list) => {
        this.list = list;
      },
      (err) => console.log(err)
    );
  }

  deleteButtonClick(id: number) {
    this.allergyService.deleteAllergy(id).subscribe(
      () => this.getList(),
      (err: any) => console.log(err)
    );
  }

  editButtonClick(id: number) {
    // this.router.navigate(['lookup-tables/allergies/edit', id]);
    this.router.navigate([{ outlets: { primary: 'lookup-tables/allergies/' + id.toString() } }]);
  }

}
