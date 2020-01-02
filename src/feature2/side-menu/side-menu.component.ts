import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ISideMenuLink } from 'src/shared/components/side-menu/side-menu-link.interface';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  SideBarLinks: ISideMenuLink[] = [
    { label: 'Feature2.1', url: '/feature2_1' },
    { label: 'Feature2.2', url: '/feature2_2' },
    { label: 'Feature2.3', url: '/feature2_3' },
    { label: 'Feature2.4', url: '/feature2_4' },
  ];

  constructor(route: ActivatedRoute) {
    route.params.subscribe(params => console.log("side menu id parameter", params['id']));
  }

  ngOnInit() {
  }

}
