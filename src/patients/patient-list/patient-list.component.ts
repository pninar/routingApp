import { Component, OnInit } from '@angular/core';

import { BaseListComponent } from 'src/shared/components/base-list/base-list.component';
import { IColumn } from 'src/interfaces/column.interface';
import { PatientsRoutes } from 'src/patients/enums/routes .enum';
import { IPatient } from 'src/interfaces/patient.interface';
import { PatientService } from 'src/core/services/patient/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'patients-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent extends BaseListComponent implements OnInit {
  list: IPatient[];
  modulePath: string = PatientsRoutes.moduleRoute;
  allowDelete: boolean = false;
  allowEdit: boolean = true;
  relativeRoute: string = PatientsRoutes.patients;
  columnList: IColumn[] = [
    { header: 'Id', cellControlType: 'span', spanText: 'id' },
    { header: 'First Name', cellControlType: 'span', spanText: 'firstName' },
    { header: 'Last Name', cellControlType: 'span', spanText: 'lastName' },
    { header: 'go to Today', cellControlType: 'button', buttonText: 'Today\'s appointment' }
  ];

  constructor(private patientService: PatientService,
    protected router: Router) {
    super(router);
  }

  getList() {
    this.patientService.getPatients().subscribe(
      (list) => {
        this.list = list;
      },
      (err) => console.log(err)
    );
  }

  delete(id: number) {
    this.patientService.deletePatient(id).subscribe(
      () => this.getList(),
      (err: any) => console.log(err)
    );
  }

  itemClick(item: any) {
    alert('clicked: ' + item.buttonText + ' ' + item.id.toString());

  }
}

