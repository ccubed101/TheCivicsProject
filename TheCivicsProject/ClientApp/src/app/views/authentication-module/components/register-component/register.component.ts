import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { Observable, of, from, range, pipe, Subject, Subscription } from 'rxjs'
import { filter, catchError, reduce } from 'rxjs/operators';

import { RegisterModel } from './register.model'
import { AuthenticationService, IAuthenticationService } from '../../services/authentication.service';
import { AuthorizationService, IAuthorizationService } from '../../services/authorization.service';

@Component({
    selector: 'register',
    template: `
        <div>

        <form (ngSubmit)="onSubmit()" #registerForm="ngForm">

            <div class="grid-container">

                <div class="grid-item title">
                    <h1>Register</h1>
                </div>

                <div class="grid-item label-item">
                  <label for="username">Username:</label>
                </div>
                <div class="grid-item input-item">
                  <input type="text" id="username" required [(ngModel)]="RegisterModel.UserName" name="UserName" #username="ngModel">
                </div>

                <div class="grid-item label-item">
                  <label for="password">Password:</label>
                </div>
                <div class="grid-item input-item">
                  <input type="password" id="password" required [(ngModel)]="RegisterModel.Password" name="Password" #password="ngModel">
                </div>

                <div class="grid-item label-item">
                  <label for="retypePassword">Re-type Password:</label>
                 </div>
                <div class="grid-item input-item">
                 <input type="text" id="retypePassword" required [(ngModel)]="RegisterModel.RetypePassword" name="RetypePassword" #retypePassword="ngModel">
                </div>

                <div class="grid-item label-item">
                    <label for="isAdmin">Is administrator:</label>
                </div>
                <div class="grid-item input-item">
                 <input type="checkbox" id="isAdmin" [(ngModel)]="RegisterModel.IsAdmin" name="IsAdmin" #isAdmin="ngModel">
                </div>

                <div class="grid-item submit">
                    <button type="submit" [disabled]="!registerForm.form.valid">Submit</button>
                </div>

            </div>

        </form>

        </div>
    `,
    styles: [ `
        .grid-container {
            display: inline-grid;
            grid-template-columns: auto auto;
            background-color: #2196F3;
            padding: 10px;
            grid-column-gap: 10px;
            grid-row-gap: 10px;
            border: 2px solid rgba(0, 0, 0);
        }
        .grid-item {
            font-size: 14px;
            text-align: right;
        }
        .label-item {
        }
        .input-item {
            background-color: rgba(255, 255, 255, 0.2);
            border: 1px solid rgba(0, 0, 0, 0.8);
        }
        .title {
            grid-column: 1 / span 2;
            text-align: center;
        }
        .submit {
            grid-column: 1 / span 2;
            text-align: center;
        }
    `]
})
export class RegisterComponent implements OnInit, OnDestroy {

    // Construction.

    constructor(
        @Inject(AuthenticationService) private authenticationService: IAuthenticationService
        , @Inject(AuthorizationService) private authorizationService: IAuthorizationService
    ) { }


    // Angular life-cycle methods

    ngOnInit() {
    }

    ngOnDestroy() {
    }


    // Instance variables.

    registerModel: RegisterModel = new RegisterModel();


    // Property accessors.

    public get RegisterModel(): RegisterModel {
        return this.registerModel;
    }


    // Event handlers.

    public onSubmit() {
        this.authenticationService.Register(this.RegisterModel.UserName, this.RegisterModel.Password, this.RegisterModel.IsAdmin)
            .subscribe(
                httpResponse => {
                    console.log(httpResponse)
                    //console.log(httpResponse.body)
                    //console.log(httpResponse.status)
                    //console.log(httpResponse.url)
                    //console.log(httpResponse.type)
                    //console.log(httpResponse.statusText)
                    //this.authorizationService.AddAdministratorAuthorization()
                    //    .subscribe(httpResponse => { console.log(httpResponse) });
                },
            );
    }

}
