import { Component, Inject } from '@angular/core';

import { IAuthorizationService, AuthorizationService } from '../../services/authorization.service';
import { AuthorizationModel } from './authorization.model'

@Component({
    selector: 'authorization',
    template: `
        <div>
            <button type="button" (click)="onClick()">Administrator</button>
        </div>
    `,
})
export class AuthorizationComponent {

    // Construction.

    constructor(
        @Inject(AuthorizationService) private authorizationService: IAuthorizationService
    ) { }


    // Instance variables.

    authorizationModel: AuthorizationModel = new AuthorizationModel();


    // Property accessors.

    public get AuthorizationModel(): AuthorizationModel {
        return this.authorizationModel;
    }


    // Event handlers.

    public onClick() {
        this.authorizationService.AddAdministratorAuthorization()
            .subscribe(
                httpResponse => {
                    console.log(httpResponse)
                },
        );
    }

}
