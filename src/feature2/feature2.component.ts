import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/core/services/utility/utility.service';
import { ISideMenuLink } from 'src/shared/components/side-menu/side-menu-link.interface';

@Component({
  selector: 'app-feature2',
  templateUrl: './feature2.component.html',
  styleUrls: ['./feature2.component.css']
})
export class Feature2Component implements OnInit {
  sideBarLinks: ISideMenuLink[] = [
    { label: 'Feature2.1', url: '/feature2_1' },
    { label: 'Feature2.2', url: '/feature2_2' },
    { label: 'Feature2.3', url: '/feature2_3' },
    { label: 'Feature2.4', url: '/feature2_4' },
  ];

  constructor(private utilityService: UtilityService) { }

  ngOnInit() {
    this.utilityService.changeCurrentModuleTitle("Feature2");
    this.utilityService.changeSideBarLinks(this.sideBarLinks);
  }

}
