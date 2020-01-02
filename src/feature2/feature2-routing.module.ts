import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Feature2Component } from './feature2.component';
import { Feature2CardsComponent } from './feature2-cards/feature2-cards.component';
import { SideMenuComponent } from './side-menu/side-menu.component';


const routes: Routes = [
    {
        path: 'feature2',
        component: Feature2Component,
        data: {
            breadcrumb: 'Feature2',
        },
        children: [
            {
                path: '',
                component: Feature2CardsComponent,
                data: {
                    breadcrumb: null,
                    path: 'feature2'
                },
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
