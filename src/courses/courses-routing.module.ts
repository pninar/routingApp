import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursesComponent } from './courses.component';
import { CourseCardsComponent } from './course-cards/course-cards.component';
import { CoursesCategoryComponent } from './courses-category/courses-category.component';
import { SideMenuComponent } from './side-menu/side-menu.component';

const routes: Routes = [
    {
        path: 'courses',
        component: CoursesComponent,
        children: [
            {
                path: '',
                component: CourseCardsComponent
            },
            {
                path: ':id',
                component: CoursesCategoryComponent
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
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CoursesRoutingModule { }
