import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, PRIMARY_OUTLET, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

import { IBreadCrumb } from './breadcrumb.interface';

@Component({
  selector: 'shared-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  static readonly ROUTE_DATA_BREADCRUMB = 'breadcrumb';

  public breadcrumbs: IBreadCrumb[];
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router) {
    this.breadcrumbs = [];
  }

  ngOnInit(): void {
    console.log('AppBreadcrumbComponent ngOnInit');
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.breadcrumbs = this.getBreadcrumbs(this.activatedRoute.root);
      });
  }

  private getBreadcrumbs(
    route: ActivatedRoute,
    url: string = '',
    breadcrumbs: IBreadCrumb[] = []
  ): IBreadCrumb[] {
    const ROUTE_DATA_BREADCRUMB = 'breadcrumb';
    const ROUTE_DATA_PATH = 'path';
    let children: ActivatedRoute[] = route.children;
    if (children.length === 0) {
      return breadcrumbs;
    }

    for (let child of children) {
      if (child.outlet !== PRIMARY_OUTLET) {
        continue;
      }
      if (!child.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
        return this.getBreadcrumbs(child, url, breadcrumbs);
      }

      let routeURL = child.snapshot.url.map(segment => segment.path).join('/');
      if (routeURL.length == 0) {
        if (child.snapshot.data.hasOwnProperty(ROUTE_DATA_PATH))
          routeURL = child.snapshot.data[ROUTE_DATA_PATH];
      }

      url += `/${routeURL}`;

      let breadcrumb: IBreadCrumb = {
        label: child.snapshot.data[ROUTE_DATA_BREADCRUMB],
        params: child.snapshot.params,
        url: url
      };

      breadcrumbs.push(breadcrumb);

      return this.getBreadcrumbs(child, url, breadcrumbs);
    }

    return breadcrumbs;
  }

  // https://stackoverflow.com/questions/46101944/angular-router-breadcrumbs-with-lazy-loaded-modules
  // explains that when loading lazy, if there is an empty path for the module in the routes, the breadcrumbs won't work
  // hack - set a path property in the data of the route where the path is empty and we need a path
  clickBreadcrumb(breadcrumb: IBreadCrumb) {
    console.log(breadcrumb);
  }
}