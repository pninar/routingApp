import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { PatientService } from 'src/core/services/patient/patient.service';
import { PatientsRoutes } from '../enums/routes .enum';

@Component({
  selector: 'patients-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  frm: FormGroup;

  // variable validationMessage stores the error message for each validation rule for each formControl
  validationMessages = {}

  // variable formErrors stores the current error message for each formControl
  formErrors = {}

  constructor(private patientService: PatientService,
    private router: Router,
    private fb: FormBuilder) { }


  ngOnInit() {
    this.frm = this.fb.group(
      {
        firstName: [''],
        lastName: [''],
      }
    );
  }


  onSubmit(): void {
    let firstName = this.frm.get("firstName").value;
    let lastName = this.frm.get("lastName").value;

    this.search(firstName, lastName);
  }

  search(firstName: string, lastName: string) {
    this.patientService.getPatients(firstName, lastName).subscribe(
      () => this.router.navigate([PatientsRoutes.moduleRoute + '/' + PatientsRoutes.patients]),
      (err: any) => console.log(err)
    );
  }
}
