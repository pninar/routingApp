import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ILookupItem } from 'src/interfaces/lookup-item.interface';
import { LookupTablesApiUrls } from '../enums/api-urls .enum';
import { IId } from 'src/interfaces/id.interface';

@Component({
  selector: 'lookup-tables-base-edit',
  templateUrl: './base-edit.component.html',
  styleUrls: ['./base-edit.component.css']
})
export abstract class BaseEditComponent implements OnInit {

  // variable validationMessage stores the error message for each validation rule for each formControl
  abstract validationMessages = {};

  // variable formErrors stores the current error message for each formControl
  abstract formErrors = {}

  abstract frm: FormGroup;
  abstract pageTitle: string;
  abstract item: IId;
  abstract itemType: string;
  abstract relativeRoute: string;

  abstract mapFormValuesToModel(): void;
  abstract update(): void;
  abstract add(): void;
  abstract initForm(): void;
  abstract setItemFromService(id: number): void;
  abstract setNewItem();

  constructor(protected router: Router,
    protected route: ActivatedRoute,
    protected fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
    this.subscribeToFormValueChanges();
    this.subscribeToRouteParameters();
  }

  subscribeToFormValueChanges(): void {
    this.frm.valueChanges.subscribe((data) => {
      this.logValidationErrors(this.frm);
    });
  }

  subscribeToRouteParameters(): void {
    // set the page title based on the route parameters
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id')
      if (id) {
        this.pageTitle = 'Edit ' + this.itemType;
        this.setItemFromService(id);
      }
      else {
        this.pageTitle = 'Create ' + this.itemType;
        // set the property to a new and empty object.
        // make sure to set the id to null so the rest api will know to fill it in
        this.setNewItem();
      }
    });
  }

  logValidationErrors(group: FormGroup = this.frm): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);

      this.formErrors[key] = ''; //clear previous validation errors

      if (abstractControl && !abstractControl.valid && (abstractControl.touched || abstractControl.dirty || abstractControl.value !== '')) {
        const messages = this.validationMessages[key];
        for (const errorKey in abstractControl.errors) {
          if (errorKey) {
            this.formErrors[key] += messages[errorKey] + ' ';
          }
        }
      }

      if (abstractControl instanceof FormGroup) {
        this.logValidationErrors(abstractControl);
      }

      // if (abstractControl instanceof FormArray) {
      //   for (const control of abstractControl.controls) {
      //     if (control instanceof FormGroup) {
      //       this.logValidationErrors(control);
      //     }
      //   }
      // }
    });
  }

  editItem(item: IId) {
    this.frm.patchValue(item);
  }

  onSubmit(): void {
    this.mapFormValuesToModel();

    if (this.item.id)
      this.update();
    else
      this.add();
  }

  routeToList() {
    this.router.navigate([LookupTablesApiUrls.baseUrl + '/' + this.relativeRoute])
  }
}
