import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { PatientService } from 'src/core/services/patient/patient.service';
import { IPatient } from 'src/interfaces/patient.interface';
import { BaseEditComponent } from 'src/shared/components/base-edit/base-edit.component';
import { PatientsRoutes } from 'src/patients/enums/routes .enum';

@Component({
  selector: 'app-patient-edit',
  templateUrl: './patient-edit.component.html',
  styleUrls: ['./patient-edit.component.css']
})
export class PatientEditComponent extends BaseEditComponent {
  // variable validationMessage stores the error message for each validation rule for each formControl
  validationMessages = {};

  // variable formErrors stores the current error message for each formControl
  formErrors = {}

  frm: FormGroup;
  pageTitle: string;
  item: IPatient;
  itemType: string = 'User';
  modulePath: string = PatientsRoutes.moduleRoute;
  relativeRoute: string = PatientsRoutes.patients;


  constructor(protected router: Router,
    protected route: ActivatedRoute,
    protected fb: FormBuilder,
    private patientService: PatientService) {
    super(router, route, fb);
  }

  initForm() {
    this.frm = this.fb.group(
      {
        id: ['', [Validators.required]],
        firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
        lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
        email: [''],
        phone: ['']
      }
    );
  }

  setNewItem() {
    // return a new and empty object.
    // make sure to set the id to null so the rest api will know to fill it in
    this.item = {
      id: null,
      firstName: '',
      lastName: '',
      email: ''
    };
  }

  setItemFromService(id: number) {
    this.patientService.getPatient(id).subscribe(
      (patient: IPatient) => {
        this.editItem(patient);
        this.item = patient;
      },
      (err: any) => console.log(err)
    );
  }

  update(): void {
    this.patientService.updatePatient(this.item).subscribe(
      () => this.routeToList(),
      (err: any) => console.log(err)
    );
  }

  add(): void {
    this.patientService.addPatient(this.item).subscribe(
      () => this.routeToList(),
      (err: any) => console.log(err)
    );
  }

  mapFormValuesToModel() {
    this.item.id = this.frm.value.id;
    this.item.firstName = this.frm.value.firstName;
    this.item.lastName = this.frm.value.lastName;
    this.item.email = this.frm.value.email;
    this.item.phone = this.frm.value.phone;
  }
}
