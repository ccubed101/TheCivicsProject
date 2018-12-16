import { Component, Inject } from '@angular/core';

import { IAuthenticationService, AuthenticationService } from '../../services/authentication.service';

@Component({
    selector: 'logout',
    template: `
        <div>
            <button type="button" (click)="onClick()">Logout</button>
        </div>
    `,
    styles: [`
    `]
})
export class LogoutComponent {

    // Construction.

    constructor(
        @Inject(AuthenticationService) private authenticationService: IAuthenticationService
    ) { }


    // Event handlers.

    public onClick() {
        this.authenticationService.Logout()
            .subscribe(
                httpResponse => {
                    console.log(httpResponse)
                },
        );
    }

}
