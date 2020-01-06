import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { BaseTableComponent } from './components/base-table/base-table.component';
import { SpanErrorsComponent } from './components/span-errors/span-errors.component';

@NgModule({
  declarations: [SideMenuComponent, BreadcrumbComponent, BaseTableComponent, SpanErrorsComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CommonModule, ReactiveFormsModule, SideMenuComponent, BreadcrumbComponent, BaseTableComponent, SpanErrorsComponent
  ]
})
export class SharedModule { }
