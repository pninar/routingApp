import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { CoursesRoutingModule } from './courses-routing.module';

import { CoursesComponent } from './courses.component';
import { CourseCardsComponent } from './course-cards/course-cards.component';
import { DevelopmentComponent } from './development/development.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { CoursesCategoryComponent } from './courses-category/courses-category.component';


@NgModule({
  declarations: [CoursesComponent, CourseCardsComponent, CoursesCategoryComponent, DevelopmentComponent, SideMenuComponent],
  imports: [
    SharedModule,
    CoursesRoutingModule
  ]
})
export class CoursesModule { }
