import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginRegisterComponent } from './components/login-register-component/login-register.component';
import { LoginComponent } from './components/login-component/login.component';
import { AuthorizationComponent } from './components/authorization-component/authorization.component';
import { LogoutComponent } from './components/logout-component/logout.component';
import { RegisterComponent } from './components/register-component/register.component';
import { AuthenticationService } from './services/authentication.service';
import { AuthenticationGuard } from './guards/authentication.guard';
import { CanActivateChildGuard } from './guards/can-activate-child.guard';
import { CanDeactivateGuard } from './guards/can-deactivate.guard';
import { CanLoadGuard } from './guards/can-load.guard';
import { CanActivateGuard } from './guards/can-activate.guard';
import { AuthorizationService } from './services/authorization.service';

export const AUTH_GUARD = new InjectionToken('app.config');

@NgModule({
    imports: [
        CommonModule
        , FormsModule
        , AuthenticationRoutingModule
    ],
    providers: [
        AuthenticationService           // TODO: If API of this module consists only of router guards then there should be no provider for this service.
        , AuthenticationGuard
        , CanActivateGuard
        , CanActivateChildGuard
        , CanDeactivateGuard
        , CanLoadGuard
        , AuthorizationService
    ],
    declarations: [
        LoginRegisterComponent
        , LoginComponent
        , LogoutComponent
        , RegisterComponent
        , AuthorizationComponent
    ]
})
export class AuthenticationModule {
}
