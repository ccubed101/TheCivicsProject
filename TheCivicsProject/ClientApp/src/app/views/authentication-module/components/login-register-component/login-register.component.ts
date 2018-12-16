import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'login-register',
    template: `
        <div>
            <login></login>
            <register></register>
            <logout></logout>
            <authorization></authorization>
        </div>
    `
})
export class LoginRegisterComponent {

    constructor() { }

}
