import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SampleService } from '../../../core-module/Sample.service';

@Component({
  selector: 'feat1-comp1',
  templateUrl: './feat1-comp1.component.html',
  styleUrls: ['./feat1-comp1.component.css']
})
export class Feat1Comp1Component implements OnInit {

  // Construction.

  constructor(
    private activatedRoute: ActivatedRoute,
    private sampleService: SampleService
  ) {
  }

    data: any;

  ngOnInit() {
    //this.data = this.activatedRoute.snapshot.data;
  }

  public get SampleServiceString(): string {
    return this.sampleService.SampleString;
  }

  public get SampleResolverServiceString(): string {
      return ''; //this.data.message;
  }

}
