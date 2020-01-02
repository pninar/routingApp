import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';

@NgModule({
  declarations: [SideMenuComponent, BreadcrumbComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CommonModule, ReactiveFormsModule, SideMenuComponent, BreadcrumbComponent
  ]
})
export class SharedModule { }
