import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature2SideMenuComponent } from './feature2-side-menu.component';

describe('Feature2SideMenuComponent', () => {
  let component: Feature2SideMenuComponent;
  let fixture: ComponentFixture<Feature2SideMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature2SideMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature2SideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
