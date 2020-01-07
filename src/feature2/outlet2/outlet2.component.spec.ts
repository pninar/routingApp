import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Outlet2Component } from './outlet2.component';

describe('Outlet2Component', () => {
  let component: Outlet2Component;
  let fixture: ComponentFixture<Outlet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Outlet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Outlet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
