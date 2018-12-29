import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

import { CommandsPanelComponent } from './commands-panel.component';
import { RouterLinkDirectiveStub } from '../../../testing/router-link-directive-stub';
import { SampleService } from '../../core-module/Sample.service';

@Component({ selector: 'router-outlet', template: '' })
class RouterOutletStubComponent { }

describe('CommandsPanelComponent', () => {
  let component: CommandsPanelComponent;
    let fixture: ComponentFixture<CommandsPanelComponent>;

    let sampleServiceStub: Partial<SampleService> = {};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [
            CommandsPanelComponent,
            RouterOutletStubComponent,
            RouterLinkDirectiveStub,
        ],
        providers: [
            { provide: SampleService, useValue: sampleServiceStub }
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
