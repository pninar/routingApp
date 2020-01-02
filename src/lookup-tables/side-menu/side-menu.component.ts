import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ISideMenuLink } from 'src/shared/components/side-menu/side-menu-link.interface';

@Component({
  selector: 'course-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  SideBarLinks: ISideMenuLink[] = [
    { label: 'Allergies', url: 'allergies' },
    { label: 'Users', url: 'users' },
  ];

  constructor(route: ActivatedRoute) {
    route.params.subscribe(params => console.log("side menu id parameter", params['id']));
  }

  ngOnInit() {
  }

}
