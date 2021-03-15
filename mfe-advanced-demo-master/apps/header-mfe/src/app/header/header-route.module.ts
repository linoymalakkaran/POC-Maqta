import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {headerPageComponent} from './header-page.component';
import {headerStoreModule} from './store/header-store.module';
import {header_ROUTES} from './header.routes';

@NgModule({
    declarations: [headerPageComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(header_ROUTES),
        headerStoreModule
    ]
})
export class headerRouteModule {
}
