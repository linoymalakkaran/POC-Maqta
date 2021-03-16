import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {RouterModule} from '@angular/router';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {routerReducer, StoreRouterConnectingModule} from '@ngrx/router-store';
import {environment} from '../environments/environment';

import {AuthLibModule} from '@demo/auth-lib';

import {AppComponent} from './app.component';
import {AppEffects} from './app.effects';
import {APP_ROUTES} from './app.routes';
import {HomeComponent} from './home/home.component';
import { TodoComponent } from './todo/todo.component';
import {MFETodoComponent} from '@demo/mfe-todo-comp';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        TodoComponent,
        MFETodoComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(APP_ROUTES),
        StoreModule.forRoot({
            router: routerReducer,
        }),
        StoreRouterConnectingModule.forRoot(),
        EffectsModule.forRoot([AppEffects]),
        !environment.production ? StoreDevtoolsModule.instrument({maxAge: 25}) : [],
        // Local modules
        AuthLibModule,
    ],
    providers: [
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ]    
})
export class AppModule {
}
