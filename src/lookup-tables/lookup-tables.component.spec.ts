import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LookupTables } from './lookup-tables.component';

describe('HomeComponent', () => {
  let component: LookupTables;
  let fixture: ComponentFixture<LookupTables>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LookupTables]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LookupTables);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
