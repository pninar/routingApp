import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryOutletComponent } from './primary-outlet.component';

describe('PrimaryOutletComponent', () => {
  let component: PrimaryOutletComponent;
  let fixture: ComponentFixture<PrimaryOutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PrimaryOutletComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaryOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
