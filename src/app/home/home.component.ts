import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/core/services/utility/utility.service';
import { ISideMenuLink } from 'src/shared/components/side-menu/side-menu-link.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  sideBarLinks: ISideMenuLink[] = [];

  constructor(private utilityService: UtilityService) { }

  ngOnInit() {
    this.utilityService.changeCurrentModuleTitle("");
    this.utilityService.changeSideBarLinks(this.sideBarLinks);
  }

}
