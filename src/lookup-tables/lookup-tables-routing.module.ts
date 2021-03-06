import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from 'src/authentication/guards/auth/auth.guard';

import { LookupTablesComponent } from './lookup-tables.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { AllergyListComponent } from './allergy/allergy-list/allergy-list.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { AllergyEditComponent } from './allergy/allergy-edit/allergy-edit.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';

const routes: Routes = [
    {
        path: '',
        component: LookupTablesComponent,
        canActivate: [AuthGuard],
        data: { breadcrumb: 'Lookup Tables', path: 'lookup-tables' },
        children: [
            {
                path: 'allergies',
                component: AllergyListComponent,
                data: { breadcrumb: 'Allergies' },
            },
            {
                path: "allergies/:id",
                component: AllergyEditComponent,
                data: {
                    breadcrumb: 'Allergy'
                },
            },
            {
                path: 'users',
                component: UserListComponent,
                data: { breadcrumb: 'Users' },
            },
            {
                path: "users/:id",
                component: UserEditComponent,
                data: {
                    breadcrumb: 'User'
                },
            },
            {
                path: '',
                outlet: 'sidemenu',
                component: SideMenuComponent
            },
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LookupTablesRoutingModule { }
