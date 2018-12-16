import { Component, OnInit } from '@angular/core';

import { SampleService } from '../../core-module/Sample.service';

@Component({
  selector: 'app-commands-panel',
  templateUrl: './commands-panel.component.html',
  styleUrls: ['./commands-panel.component.css']
})
export class CommandsPanelComponent implements OnInit {

  constructor(private sampleService: SampleService) {
  }

  ngOnInit() {
  }

  public get ServiceString(): string {
    return this.sampleService.SampleString;
  }

}
