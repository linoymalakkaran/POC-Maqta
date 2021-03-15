import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {menuPageComponent} from './menu-page.component';
import {menuStoreModule} from './store/menu-store.module';
import {menu_ROUTES} from './menu.routes';

@NgModule({
    declarations: [menuPageComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(menu_ROUTES),
        menuStoreModule
    ]
})
export class menuRouteModule {
}
