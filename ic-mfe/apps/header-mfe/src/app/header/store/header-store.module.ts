import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';

import {header_FEATURE_KEY, headerReducer} from './header.reducer';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature(
            header_FEATURE_KEY,
            headerReducer
        )
    ],
})
export class headerStoreModule {
}
