import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';

import {menu_FEATURE_KEY, menuReducer} from './menu.reducer';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature(
            menu_FEATURE_KEY,
            menuReducer
        )
    ],
})
export class menuStoreModule {
}
