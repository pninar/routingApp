import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ISideMenuLink } from './side-menu-link.interface';

@Component({
  selector: 'shared-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  @Input() sideBarLinks: ISideMenuLink[];

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  navigate(path) {
    this.router.navigate([{ outlets: { primary: path, sidemenu: path } }],
      { relativeTo: this.route });
  }

}
