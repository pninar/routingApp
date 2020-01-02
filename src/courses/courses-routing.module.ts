import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursesComponent } from './courses.component';
import { CourseCardsComponent } from './course-cards/course-cards.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { Course1Component } from './course1/course1.component';
import { Course4Component } from './course4/course4.component';
import { Course2Component } from './course2/course2.component';
import { Course3Component } from './course3/course3.component';

const routes: Routes = [
    {
        path: 'courses',
        component: CoursesComponent,
        data: {
            breadcrumb: 'Courses',
        },
        children: [
            {
                path: '',
                component: CourseCardsComponent,
                data: {
                    breadcrumb: null,
                    path: 'courses'
                },
            },
            // {
            //     path: ':id',
            //     component: CoursesCategoryComponent
            // },
            {
                path: 'course1',
                component: Course1Component,
                data: {
                    breadcrumb: 'Course1'
                },
            },
            {
                path: 'course2',
                component: Course2Component,
                data: {
                    breadcrumb: 'Course2'
                },
            },
            {
                path: 'course3',
                component: Course3Component,
                data: {
                    breadcrumb: 'Course3'
                },
            },
            {
                path: 'course4',
                component: Course4Component,
                data: {
                    breadcrumb: 'Course4'
                },
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
