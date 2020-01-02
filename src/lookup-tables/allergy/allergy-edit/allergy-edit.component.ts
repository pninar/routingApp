import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { IAllergy } from 'src/interfaces/allergy.interface';
import { AllergyService } from 'src/core/services/allergy/allergy.service';


@Component({
  selector: 'lookup-tables-allergy-edit',
  templateUrl: './allergy-edit.component.html',
  styleUrls: ['./allergy-edit.component.css']
})
export class AllergyEditComponent implements OnInit {
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

  allergyForm: FormGroup;
  allergy: IAllergy;
  pageTitle: string;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private allergyService: AllergyService) { }

  ngOnInit() {
    this.allergyForm = this.fb.group(
      {
        id: ['', [Validators.required]],
        name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      }
    );

    this.allergyForm.valueChanges.subscribe((data) => {
      this.logValidationErrors(this.allergyForm);
    });

    this.route.paramMap.subscribe(params => {
      const patientId = +params.get('id')
      if (patientId) {
        this.pageTitle = 'Edit Allergy';
        this.getAllergy(patientId);
      }
      else {
        this.pageTitle = 'Create Allergy';
        // set the property to a new and empty object.
        // make sure to set the id to null so the rest api will know to fill it in
        this.allergy = {
          id: null,
          name: '',
        };
      }
    });
  }

  getAllergy(id: number) {
    this.allergyService.getAllergy(id).subscribe(
      (allergy: IAllergy) => {
        this.editAllergy(allergy);
        this.allergy = allergy;
      },
      (err: any) => console.log(err)
    );
  }

  editAllergy(allergy: IAllergy) {
    this.allergyForm.patchValue(allergy);
  }

  logValidationErrors(group: FormGroup = this.allergyForm): void {
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

  onSubmit(): void {
    this.mapFormValuesToModel();

    if (this.allergy.id)
      this.update();
    else
      this.add();
  }

  update(): void {
    this.allergyService.updateAllergy(this.allergy).subscribe(
      () => this.router.navigate(['lookup-tables/allergies']),
      (err: any) => console.log(err)
    );
  }

  add(): void {
    this.allergyService.addAllergy(this.allergy).subscribe(
      () => this.router.navigate(['lookup-tables/allergies']),
      (err: any) => console.log(err)
    );
  }

  mapFormValuesToModel() {
    this.allergy.id = this.allergyForm.value.id;
    this.allergy.name = this.allergyForm.value.name;
  }
}
