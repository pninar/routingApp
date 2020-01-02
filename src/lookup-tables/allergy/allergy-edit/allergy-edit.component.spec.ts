import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllergyEditComponent } from './allergy-edit.component';

describe('AllergyEditComponent', () => {
  let component: AllergyEditComponent;
  let fixture: ComponentFixture<AllergyEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllergyEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllergyEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
