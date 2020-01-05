import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpanErrorsComponent } from './span-errors.component';

describe('SpanErrorsComponent', () => {
  let component: SpanErrorsComponent;
  let fixture: ComponentFixture<SpanErrorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpanErrorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpanErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
