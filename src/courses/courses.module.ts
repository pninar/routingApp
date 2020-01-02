import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { CoursesRoutingModule } from './courses-routing.module';

import { CoursesComponent } from './courses.component';
import { CourseCardsComponent } from './course-cards/course-cards.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { CoursesCategoryComponent } from './courses-category/courses-category.component';
import { Course1Component } from './course1/course1.component';
import { Course2Component } from './course2/course2.component';
import { Course3Component } from './course3/course3.component';
import { Course4Component } from './course4/course4.component';


@NgModule({
  declarations: [CoursesComponent, CourseCardsComponent, CoursesCategoryComponent, SideMenuComponent,
    Course1Component, Course2Component, Course3Component, Course4Component],
  imports: [
    SharedModule,
    CoursesRoutingModule
  ]
})
export class CoursesModule { }
