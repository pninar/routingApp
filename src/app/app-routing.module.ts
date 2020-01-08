import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AuthGuard } from 'src/authentication/guards/auth/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'about',
    data: { breadcrumb: 'About' },
    component: AboutComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'courses',
    canActivate: [AuthGuard],
    data: { breadcrumb: 'Courses' },
    loadChildren: '../courses/courses.module#CoursesModule'
  },
  {
    path: 'feature2',
    data: { breadcrumb: 'Feature2' },
    canActivate: [AuthGuard],
    loadChildren: '../feature2/feature2.module#Feature2Module'
  },
  {
    path: 'lookup-tables',
    data: { breadcrumb: 'Lookup Tables' },
    canActivate: [AuthGuard],
    loadChildren: '../lookup-tables/lookup-tables.module#LookupTablesModule'
  },
  {
    path: 'patients',
    data: { breadcrumb: 'Patients' },
    canActivate: [AuthGuard],
    loadChildren: '../patients/patients.module#PatientsModule'
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
