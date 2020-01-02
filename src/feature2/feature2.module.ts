import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { Feature2RoutingModule } from './feature2-routing.module';

import { Feature2CardsComponent } from './feature2-cards/feature2-cards.component';
import { Feature2SideMenuComponent } from './feature2-side-menu/feature2-side-menu.component';
import { Feature2Component } from './feature2.component';

@NgModule({
  declarations: [Feature2Component, Feature2CardsComponent, Feature2SideMenuComponent],
  imports: [
    SharedModule,
    Feature2RoutingModule
  ]
})
export class Feature2Module { }
