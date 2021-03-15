import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AtlpSharedModule } from '@atlp/shared.module';

import { ContentComponent } from 'app/layout/components/content/content.component';

@NgModule({
    declarations: [
        ContentComponent
    ],
    imports     : [
        RouterModule,
        AtlpSharedModule
    ],
    exports     : [
        ContentComponent
    ]
})
export class ContentModule
{
}
