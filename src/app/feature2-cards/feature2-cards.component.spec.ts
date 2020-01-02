import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature2CardsComponent } from './feature2-cards.component';

describe('Feature2CardsComponent', () => {
  let component: Feature2CardsComponent;
  let fixture: ComponentFixture<Feature2CardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature2CardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature2CardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
