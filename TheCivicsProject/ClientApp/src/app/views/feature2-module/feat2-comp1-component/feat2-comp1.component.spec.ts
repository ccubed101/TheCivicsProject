import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Directive, OnInit, Input } from '@angular/core';

import { Feat2Comp1Component } from './feat2-comp1.component';
import { SampleService } from '../../../core-module/Sample.service';
import { RouterLinkDirectiveStub } from '../../../../testing/router-link-directive-stub';
import { ActivatedRouteStub } from '../../../../testing/activated-route-stub';

@Component({ selector: 'router-outlet', template: '' })
class RouterOutletStubComponent { }

describe('Feat2Comp1Component', () => {
    let component: Feat2Comp1Component;
    let fixture: ComponentFixture<Feat2Comp1Component>;
    let sampleServiceStub: Partial<SampleService> = {};

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                Feat2Comp1Component,
                RouterOutletStubComponent,
                RouterLinkDirectiveStub,
            ],
            providers: [
                SampleService,
            ],
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
