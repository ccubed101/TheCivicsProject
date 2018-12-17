import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Directive, OnInit, Input } from '@angular/core';

import { Feat2Comp1Component } from './feat2-comp1.component';

@Component({ selector: 'router-outlet', template: '' })
class RouterOutletStubComponent { }

@Component({ selector: 'routerLink', template: '' })
class RouterLinkStubComponent { }

class SampleService { }

@Directive({
    selector: '[routerLink]',
    host: { '(click)': 'onClick()' }
})
export class RouterLinkDirectiveStub {
    @Input('routerLink') linkParams: any;
    navigatedTo: any = null;

    onClick() {
        this.navigatedTo = this.linkParams;
    }
}

describe('Feat2Comp1Component', () => {
  let component: Feat2Comp1Component;
  let fixture: ComponentFixture<Feat2Comp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [Feat2Comp1Component, RouterOutletStubComponent, RouterLinkDirectiveStub],
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
