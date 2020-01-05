import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { IAllergy } from 'src/interfaces/allergy.interface';
import { AllergyService } from 'src/core/services/allergy/allergy.service';
import { BaseEditComponent } from 'src/shared/components/base-edit/base-edit.component';
import { LookupTablesRoutes } from 'src/lookup-tables/enums/routes.enum';

@Component({
  selector: 'lookup-tables-allergy-edit',
  templateUrl: './allergy-edit.component.html',
  styleUrls: ['./allergy-edit.component.css']
})
export class AllergyEditComponent extends BaseEditComponent {
  // variable validationMessage stores the error message for each validation rule for each formControl
  validationMessages = {
    "name": {
      "required": "Name is required.",
      "minlength": "Name must be greater than 2 characters.",
      "maxlength": "Name must be less than 10 characters.",
    },
  }

  // variable formErrors stores the current error message for each formControl
  formErrors = {}

  frm: FormGroup;
  pageTitle: string;
  item: IAllergy;
  itemType: string = 'Allergy';
  modulePath: string = LookupTablesRoutes.moduleRoute;
  relativeRoute: string = LookupTablesRoutes.allergies;

  constructor(protected router: Router,
    protected route: ActivatedRoute,
    protected fb: FormBuilder,
    private allergyService: AllergyService) {
    super(router, route, fb);
  }

  initForm() {
    this.frm = this.fb.group(
      {
        id: ['', [Validators.required]],
        name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      }
    );
  }

  setNewItem() {
    // return a new and empty object.
    // make sure to set the id to null so the rest api will know to fill it in
    this.item = {
      id: null,
      name: '',
    };
  }

  setItemFromService(id: number) {
    this.allergyService.getAllergy(id).subscribe(
      (allergy: IAllergy) => {
        this.editItem(allergy);
        this.item = allergy;
      },
      (err: any) => console.log(err)
    );
  }

  update(): void {
    this.allergyService.updateAllergy(this.item).subscribe(
      () => this.routeToList(),
      (err: any) => console.log(err)
    );
  }

  add(): void {
    this.allergyService.addAllergy(this.item).subscribe(
      () => this.routeToList(),
      (err: any) => console.log(err)
    );
  }

  mapFormValuesToModel() {
    this.item.id = this.frm.value.id;
    this.item.name = this.frm.value.name;
  }
}
