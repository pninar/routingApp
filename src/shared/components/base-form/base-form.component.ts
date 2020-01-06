import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';

@Component({
  selector: 'shared-base-form',
  templateUrl: './base-form.component.html',
  styleUrls: ['./base-form.component.css']
})
export abstract class BaseFormComponent implements OnInit {
  // variable validationMessage stores the error message for each validation rule for each formControl
  abstract validationMessages = {};

  // variable formErrors stores the current error message for each formControl
  abstract formErrors = {}

  abstract frm: FormGroup;
  abstract pageTitle: string;
  abstract initForm(): void;

  constructor(protected fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
    this.subscribeToFormValueChanges();
  }

  subscribeToFormValueChanges(): void {
    this.frm.valueChanges.subscribe((data) => {
      this.logValidationErrors(this.frm);
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
}
