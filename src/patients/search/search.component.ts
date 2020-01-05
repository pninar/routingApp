import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { PatientService } from 'src/core/services/patient/patient.service';

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
    this.search();
  }

  search() {
    this.router.navigate(['home']);
  }
}
