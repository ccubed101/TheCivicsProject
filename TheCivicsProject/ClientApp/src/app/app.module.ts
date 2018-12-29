import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';    // Added for Angular Universal app.
import { isPlatformBrowser } from '@angular/common';            // Added for Angular Universal app.

import { AppRoutingModule } from './app-routing.module';
import { AuthenticationModule} from './views/authentication-module/authentication.module'
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { CoreModule } from './core-module/core.module';
import { SharedModule } from './shared-module/shared.module';
import { MenuComponent } from './menu/menu.component';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        CounterComponent,
        FetchDataComponent,
        MenuComponent,
        HighlightDirective,
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'tcp-universal' }),     // Angular Universal.
        HttpClientModule,
        FormsModule,
        AppRoutingModule,
        AuthenticationModule,           // This module cannot be lazy loaded because its API consists of router guards used in routes in app-routing.module.ts.
        CoreModule,                     // For application wide (global) services.
        SharedModule.forRoot()          // This will add service providers from SharedModule to AppModule's service providers.
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {

    // Angular Universal.
    constructor(
        @Inject(PLATFORM_ID) private platformId: Object,
        @Inject(APP_ID) private appId: string) {
        const platform = isPlatformBrowser(platformId) ?
            'in the browser' : 'on the server';
        console.log(`Running ${platform} with appId=${appId}`);
    }



}
