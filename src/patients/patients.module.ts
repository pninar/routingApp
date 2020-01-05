import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { PatientsRoutingModule } from './patients-routing.module';
import { SearchComponent } from './search/search.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { PatientsComponent } from './patients.component';
import { PatientComponent } from './patient/patient.component';

@NgModule({
  declarations: [SearchComponent, SideMenuComponent, PatientsComponent, PatientComponent],
  imports: [
    SharedModule,
    PatientsRoutingModule
  ]
})
export class PatientsModule { }
