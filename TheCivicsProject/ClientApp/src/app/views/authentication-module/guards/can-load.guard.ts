import { Injectable } from '@angular/core';
import { CanLoad, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { Router, Route } from '@angular/router';

// There are 4 types of router guards:
// 1. "CanActivate" which checks to see if a user can visit a route.
// 2. "CanActivateChild" which checks to see if a user can visit a routes children.
// 3. "CanDeactivate" which checks to see if a user can exit a route.  This makes it
//    possible to do something just before the user exits a particular part of the application.
// 4. "CanLoad" which checks to see if a user can route to a module that lazy loaded.
// Additionally there is "Resolve" which performs route data retrieval before route activation.

@Injectable()
export class CanLoadGuard implements CanLoad {

    constructor(
        private authenticationService: AuthenticationService,
        private router: Router
    ) { }

    canLoad(
        route: Route
    ): Observable<boolean> | Promise<boolean> | boolean {
        console.log("canLoad");
        console.log('route.path = ' + route.path);
        return true;
    }
}
