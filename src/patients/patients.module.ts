import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { PatientsRoutingModule } from './patients-routing.module';
import { SearchComponent } from './search/search.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { PatientsComponent } from './patients.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientEditComponent } from './patient-edit/patient-edit.component';

@NgModule({
  declarations: [SearchComponent, SideMenuComponent, PatientsComponent, PatientListComponent, PatientEditComponent],
  imports: [
    SharedModule,
    PatientsRoutingModule
  ]
})
export class PatientsModule { }
