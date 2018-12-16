import { Injectable, Component } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

// There are 4 types of router guards:
// 1. "CanActivate" which checks to see if a user can visit a route.
// 2. "CanActivateChild" which checks to see if a user can visit a routes children.
// 3. "CanDeactivate" which checks to see if a user can exit a route.  This makes it
//    possible to do something just before the user exits a particular part of the application.
// 4. "CanLoad" which checks to see if a user can route to a module that lazy loaded.
// Additionally there is "Resolve" which performs route data retrieval before route activation.

@Injectable()
export class CanActivateChildGuard implements CanActivateChild {

    constructor(
        private authenticationService: AuthenticationService,
        private router: Router
    ) { }

    canActivateChild(
        route: ActivatedRouteSnapshot           // The future route that will be activated if the guard passes, we can use it’s params property to extract the route params.
        , state: RouterStateSnapshot            // The future RouterState if the guard passes, we can find the URL we are trying to navigate to from the url property.
    ): Observable<boolean> | Promise<boolean> | boolean {
        console.log("canActivateChild");
        console.log('route.url = ' + route.url);
        console.log('state.url = ' + state.url);
        return true;
    }
}
