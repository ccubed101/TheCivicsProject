import { Component, OnInit } from '@angular/core';

import { SampleService } from '../../core-module/Sample.service';
import { SharedSampleService } from '../../shared-module/SharedSampleService';

@Component({
  selector: 'map-panel',
  templateUrl: './map-panel.component.html',
  styleUrls: ['./map-panel.component.css']
})
export class MapPanelComponent implements OnInit {

  constructor(
    private sampleService: SampleService,
    private sharedSampleService: SharedSampleService
  ) {
  }

  ngOnInit() {
  }

  public get ServiceString(): string {
    return this.sharedSampleService.SampleString;
  }
}
