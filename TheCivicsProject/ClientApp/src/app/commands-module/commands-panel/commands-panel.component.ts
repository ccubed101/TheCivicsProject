import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SampleService } from '../../core-module/Sample.service';

@Component({
    selector: 'app-commands-panel',
    //templateUrl: './commands-panel.component.html',
    template: `
        <p>
          commands-panel works! String is {{ServiceString}}
        </p>
        <a [routerLink]="[{ outlets: { primary: ['command'] } } ]">
          <span class='glyphicon glyphicon-home'></span> Load Command component!
        </a>
        <router-outlet></router-outlet>
    `,
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
