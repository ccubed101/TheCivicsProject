import { Component, OnInit } from '@angular/core';

import { SampleService } from '../../../core-module/Sample.service';

@Component({
  selector: 'feat2-comp1',
  templateUrl: './feat2-comp1.component.html',
  styleUrls: ['./feat2-comp1.component.css']
})
export class Feat2Comp1Component implements OnInit {

  constructor(private sampleService: SampleService) {
  }

  ngOnInit() {
  }

  public get ServiceString(): string {
    return this.sampleService.SampleString;
  }

}
