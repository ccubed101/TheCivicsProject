import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feat2Comp2Component } from './feat2-comp2.component';

describe('Feat2Comp2Component', () => {
  let component: Feat2Comp2Component;
  let fixture: ComponentFixture<Feat2Comp2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feat2Comp2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feat2Comp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
