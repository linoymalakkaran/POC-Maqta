import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import {environment} from '../environments/environment';
import {AppComponent} from './app.component';
import {MenuRouteModule} from './menu/menu-route.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        RouterModule.forRoot([], {initialNavigation: 'enabled'}),
        StoreModule.forRoot({}),
        !environment.production ? StoreDevtoolsModule.instrument({maxAge: 25}) : [],
        // Local modules
        MenuRouteModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}
