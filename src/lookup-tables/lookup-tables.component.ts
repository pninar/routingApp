import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/core/services/utility/utility.service';
import { ISideMenuLink } from 'src/shared/components/side-menu/side-menu-link.interface';
import { LookupTablesRoutes } from './enums/routes.enum';

@Component({
  selector: 'app-lookup-tables',
  templateUrl: './lookup-tables.component.html',
  styleUrls: ['./lookup-tables.component.css']
})
export class LookupTablesComponent implements OnInit {
  sideBarLinks: ISideMenuLink[] = [
    { label: 'Allergies', url: LookupTablesRoutes.moduleRoute + '/' + LookupTablesRoutes.allergies },
    { label: 'Users', url: LookupTablesRoutes.moduleRoute + '/' + LookupTablesRoutes.users },
  ];

  constructor(private utilityService: UtilityService) { }

  ngOnInit() {
    this.utilityService.changeCurrentModuleTitle("Lookup Tables");
    this.utilityService.changeSideBarLinks(this.sideBarLinks);
  }

}
