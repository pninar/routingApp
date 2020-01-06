import { Component, OnInit } from '@angular/core';

import { BaseListComponent } from 'src/shared/components/base-list/base-list.component';
import { IColumn } from 'src/interfaces/column.interface';
import { PatientsRoutes } from 'src/patients/enums/routes .enum';
import { IPatient } from 'src/interfaces/patient.interface';
import { PatientService } from 'src/core/services/patient/patient.service';
import { Router } from '@angular/router';
import { IColumnButtonClickItem } from 'src/interfaces/column-button-click-item.interface';

const button1Text = 'Today\'s appointment';
const button2Text = 'Button2';
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
    { header: '', cellControlType: 'button', buttonText: button1Text },
    { header: '', cellControlType: 'button', buttonText: button2Text }
  ];

  patient: IPatient;

  constructor(private patientService: PatientService,
    protected router: Router) {
    super(router);
  }

  ngOnInit() {
    this.getList();
    this.patientService.currentPatient.subscribe(patient => this.patient = patient)
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

  itemButtonClick(item: IColumnButtonClickItem) {
    let id = item.id;

    this.patientService.getPatient(id).subscribe(
      (patient: IPatient) => {
        this.patientService.changePatient(patient);
        switch (item.buttonText) {
          case button1Text:
            this.button1Click(id);
            break;
          case button2Text:
            this.button2Click(id)
            break;

          default:
          //default block statement;
        }
      },
      (err: any) => console.log(err)
    );
  }

  button1Click(id: number) {
    alert('clicked: ' + button1Text + ' for ' + this.patient.firstName.trim() + ' ' + this.patient.lastName.trim());
  }

  button2Click(id: number) {
    alert('clicked: ' + button2Text + ' for ' + this.patient.firstName.trim() + ' ' + this.patient.lastName.trim());
  }
}

