import { Component, Inject, OnInit } from '@angular/core';
import { IAuthenticationService, AuthenticationService } from '../../authentication-module/services/authentication.service';
import { browser } from 'protractor';

@Component({
  selector: 'feat2-comp2',
  template: `
    <p>
      Child Component #2 of Feature Module #2
    </p>
    <input type="button" value="Login" (click)="OnClick($event)" />

  `,
  styleUrls: ['./feat2-comp2.component.css']
})
export class Feat2Comp2Component implements OnInit {

    constructor(
        @Inject(AuthenticationService) private authenticationService : IAuthenticationService
    ) {
    }

    ngOnInit() {
    }

    public forecasts: WeatherForecast[];


    OnClick(ev: MouseEvent) {

        this.authenticationService.Test()
            .subscribe(
                httpResponse => {
                    console.log(httpResponse)
                },
        );

    }
}

interface WeatherForecast {
  dateFormatted: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
