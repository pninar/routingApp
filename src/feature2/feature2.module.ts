import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { Feature2RoutingModule } from './feature2-routing.module';

import { Feature2CardsComponent } from './feature2-cards/feature2-cards.component';
import { Feature2Component } from './feature2.component';
import { SideMenuComponent } from './side-menu/side-menu.component';

@NgModule({
  declarations: [Feature2Component, Feature2CardsComponent, SideMenuComponent],
  imports: [
    SharedModule,
    Feature2RoutingModule
  ]
})
export class Feature2Module { }
