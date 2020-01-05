import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from 'src/authentication/guards/auth/auth.guard';

import { SideMenuComponent } from './side-menu/side-menu.component';
import { PatientsComponent } from './patients.component';
import { SearchComponent } from './search/search.component';
import { PatientComponent } from './patient/patient.component';

const routes: Routes = [
    {
        path: '',
        component: PatientsComponent,
        canActivate: [AuthGuard],
        data: { breadcrumb: 'Patients', path: 'patients' },
        children: [
            {
                path: "patients/:id",
                component: PatientComponent,
                data: {
                    breadcrumb: 'Patient'
                },
            },
            {
                path: 'search',
                component: SearchComponent,
                data: { breadcrumb: 'Search' },
            },
            {
                path: '',
                outlet: 'sidemenu',
                component: SideMenuComponent
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PatientsRoutingModule { }
