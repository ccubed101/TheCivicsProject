import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { ActivatedRouteStub } from '../../../../testing/activated-route-stub';
import { Feat1Comp1Component } from './feat1-comp1.component';
import { SampleService } from '../../../core-module/Sample.service';

describe('Feat1Comp1Component', () => {
  let component: Feat1Comp1Component;
    let fixture: ComponentFixture<Feat1Comp1Component>;
    let activatedRouteStub: Partial<ActivatedRoute> = {};
    let sampleServiceStub: Partial<SampleService> = {};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [Feat1Comp1Component],
        providers: [
            { provide: ActivatedRoute, useValue: activatedRouteStub },
            { provide: SampleService, useValue: sampleServiceStub },
        ]
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
