import { NgModule, ModuleWithProviders  } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';

import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { NoLazyLoadingEntrypoint } from './views/no-lazy-load-module/no-lazy-load.module';
import { PreloadStrategy } from './preload-strategy';
import { AuthenticationGuard } from './views/authentication-module/guards/authentication.guard'
import { CanActivateGuard } from './views/authentication-module/guards/can-activate.guard';
import { CanLoadGuard } from './views/authentication-module/guards/can-load.guard'

// Temporary
import { LoginComponent } from './views/authentication-module/components/login-component/login.component'
import { RegisterComponent } from './views/authentication-module/components/register-component/register.component'
import { LoginRegisterComponent } from './views/authentication-module/components/login-register-component/login-register.component'

const routes: Routes = [

    { path: '', redirectTo: 'login-register', pathMatch: 'full' },

    // The following routes are to components that are defined in modules that are
    // imported into the main application module (see app.module.ts).
    { path: 'home', component: HomeComponent, canActivate: [ AuthenticationGuard, CanActivateGuard ] },
    { path: 'counter', component: CounterComponent, outlet: 'secondary' },
    { path: 'fetch-data', component: FetchDataComponent },

    // Temporary
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login-register', component: LoginRegisterComponent },

    // The following modules are lazy loaded.  The objective is to make sure that any
    // type defined in the lazy loaded modules are not reference anywhere but in the
    // modules themselves.  In this way the modules are self-contained and loosely coupled
    // witht the rest of the application.
    { path: 'primary-panel', loadChildren: 'app/views/feature1-module/feature1.module#Feature1Module', canLoad: [CanLoadGuard], data: { preload: false } },
    { path: 'secondary-panel', loadChildren: 'app/views/feature2-module/feature2.module#Feature2Module', canLoad: [CanLoadGuard], outlet: 'secondary', data: { preload: false } },
    { path: 'primary-panel', loadChildren: 'app/map-module/map-panel.module#MapPanelModule', data: { preload: false } },
    { path: 'secondary-panel', loadChildren: 'app/commands-module/commands.module#CommandsModule', outlet: 'secondary', data: { preload: false } },

    // An example of a lazy loaded module that is prevented from being lazy loaded.
    { path: 'no-lazy-load-panel', loadChildren: NoLazyLoadingEntrypoint },

    // ?
    { path: '**', redirectTo: 'home' }




    //{ path: '', component: ProxyMapComponent, pathMatch: 'full' },
    //{ path: 'map-panel', loadChildren: 'app/map-module/map-panel.module#MapPanelModule', data: { preload: false } },
    //{ path: 'commands-panel', loadChildren: 'app/commands-module/commands.module#CommandsModule', data: { preload: false } },
    //{ path: 'no-lazy-load-panel', loadChildren: NoLazyLoadingEntrypoint },
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadStrategy/*, enableTracing: true*/ })],
  exports: [RouterModule],
  providers: [ PreloadStrategy ]
})
export class AppRoutingModule { }

