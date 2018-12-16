import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feat2Comp1Component } from './feat2-comp1.component';

describe('Feat2Comp1Component', () => {
  let component: Feat2Comp1Component;
  let fixture: ComponentFixture<Feat2Comp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feat2Comp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feat2Comp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
