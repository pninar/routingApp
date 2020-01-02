import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursesComponent } from './courses/courses.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { CourseCardsComponent } from './course-cards/course-cards.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { CoursesCategoryComponent } from './courses-category/courses-category.component';
import { Feature2Component } from './feature2/feature2.component';
import { Feature2CardsComponent } from './feature2-cards/feature2-cards.component';
import { Feature2SideMenuComponent } from './feature2-side-menu/feature2-side-menu.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
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
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
