import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from 'src/authentication/guards/auth/auth.guard';

import { Feature2Component } from './feature2.component';
import { Feature2CardsComponent } from './feature2-cards/feature2-cards.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { PrimaryOutletComponent } from './primary-outlet/primary-outlet.component';
import { Outlet2Component } from './outlet2/outlet2.component';


const routes: Routes = [
    {
        path: 'feature2',
        component: Feature2Component,
        canActivate: [AuthGuard],
        data: {
            breadcrumb: 'Feature2',
        },
        children: [
            {
                path: '',
                component: PrimaryOutletComponent,
                data: {
                    breadcrumb: null,
                    path: 'feature2'
                },
            },
            {
                path: '',
                outlet: 'outlet2',
                component: Outlet2Component
            },
            {
                path: ':id',
                component: Feature2CardsComponent
            },
            {
                path: '',
                outlet: 'sidemenu',
                component: SideMenuComponent
            },
            {
                path: ':id',
                outlet: 'sidemenu',
                component: SideMenuComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class Feature2RoutingModule { }
