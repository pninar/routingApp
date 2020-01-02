import { NgModule } from '@angular/core';

import { SharedModule } from 'src/shared/shared.module';
import { LookupTablesRoutingModule } from './lookup-tables-routing.module';

import { AllergyListComponent } from './allergy/allergy-list/allergy-list.component';
import { AllergyEditComponent } from './allergy/allergy-edit/allergy-edit.component';
import { LookupTables } from './lookup-tables.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';

@NgModule({
  declarations: [AllergyListComponent, AllergyEditComponent, LookupTables, SideMenuComponent, UserListComponent, UserEditComponent],
  imports: [
    SharedModule, LookupTablesRoutingModule
  ]
})
export class LookupTablesModule { }
