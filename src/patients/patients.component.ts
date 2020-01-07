import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/core/services/utility/utility.service';
import { ISideMenuLink } from 'src/shared/components/side-menu/side-menu-link.interface';
import { PatientsRoutes } from './enums/routes .enum';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  sideBarLinks: ISideMenuLink[] = [
    { label: 'Search', url: PatientsRoutes.moduleRoute + '/' + PatientsRoutes.search },
  ];

  constructor(private utilityService: UtilityService) { }

  ngOnInit() {
    this.utilityService.changeCurrentModuleTitle("Patients");
    this.utilityService.changeSideBarLinks(this.sideBarLinks);
  }
}
