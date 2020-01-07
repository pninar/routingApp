import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/core/services/utility/utility.service';
import { ISideMenuLink } from 'src/shared/components/side-menu/side-menu-link.interface';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  sideBarLinks: ISideMenuLink[] = [
    { label: 'Course1', url: 'courses/course1' },
    { label: 'Course2', url: 'courses/course2' },
    { label: 'Course3', url: 'courses/course3' },
    { label: 'Course4', url: 'courses/course4' },
  ];

  constructor(private utilityService: UtilityService) { }

  ngOnInit() {
    this.utilityService.changeCurrentModuleTitle("Courses");
    this.utilityService.changeSideBarLinks(this.sideBarLinks);
  }

}
