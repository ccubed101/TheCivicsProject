import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapPanelComponent } from './map-panel.component';
import { SampleService } from '../../core-module/Sample.service';
import { SharedSampleService } from '../../shared-module/SharedSampleService';

describe('MapPanelComponent', () => {
  let component: MapPanelComponent;
  let fixture: ComponentFixture<MapPanelComponent>;
    let sampleServiceStub: Partial<SampleService> = {};
    let sharedSampleServiceStub: Partial<SharedSampleService> = {};

    beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapPanelComponent ],
        providers: [
            { provide: SampleService, useValue: sampleServiceStub },
            { provide: SharedSampleService, useValue: sharedSampleServiceStub },
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
