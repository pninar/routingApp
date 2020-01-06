import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { IId } from 'src/interfaces/id.interface';
import { BaseFormComponent } from '../base-form/base-form.component';

@Component({
  selector: 'shared-base-edit',
  templateUrl: './base-edit.component.html',
  styleUrls: ['./base-edit.component.css']
})
export abstract class BaseEditComponent extends BaseFormComponent implements OnInit {
  abstract item: IId;
  abstract itemType: string;
  abstract modulePath: string;
  abstract relativeRoute: string;

  abstract mapFormValuesToModel(): void;
  abstract update(): void;
  abstract add(): void;
  abstract setItemFromService(id: number): void;
  abstract setNewItem();

  constructor(protected router: Router,
    protected route: ActivatedRoute,
    protected fb: FormBuilder) {
    super(fb);
  }

  ngOnInit() {
    super.ngOnInit();
    this.subscribeToRouteParameters();
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
    this.router.navigate([this.modulePath + '/' + this.relativeRoute])
  }
}
