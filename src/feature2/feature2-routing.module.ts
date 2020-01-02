import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Feature2Component } from './feature2.component';
import { Feature2CardsComponent } from './feature2-cards/feature2-cards.component';
import { Feature2SideMenuComponent } from './feature2-side-menu/feature2-side-menu.component';


const routes: Routes = [
    {
        path: 'feature2',
        component: Feature2Component,
        children: [
            {
                path: '',
                component: Feature2CardsComponent
            },
            {
                path: ':id',
                component: Feature2CardsComponent
            },
            {
                path: '',
                outlet: 'sidemenu',
                component: Feature2SideMenuComponent
            },
            {
                path: ':id',
                outlet: 'sidemenu',
                component: Feature2SideMenuComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class Feature2RoutingModule { }
