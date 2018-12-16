import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feat1Comp1Component } from './feat1-comp1.component';

describe('Feat1Comp1Component', () => {
  let component: Feat1Comp1Component;
  let fixture: ComponentFixture<Feat1Comp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feat1Comp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feat1Comp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
