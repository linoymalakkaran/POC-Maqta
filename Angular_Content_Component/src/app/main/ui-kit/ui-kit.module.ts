import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { AtlpSharedModule } from '@atlp/shared.module';
import { UiKitComponent } from './ui-kit.component';

import {
    ButtonsComponent,
    AvatarsComponent,
    TablesComponent,
    FieldsComponent,
    DropdownComponent,
    BreadcrumbComponent,
    SidenavComponent,
    CheckboxOverviewExample,
    ExpansionPanelComponent,
    VoyageTableComponent
} from './components';

import { SharedModule } from 'app/shared/shared.module';
import { StepperComponent } from './components/stepper/stepper.component';


const routes = [
    {
        path: 'ui-kit',
        component: UiKitComponent
    }
];

@NgModule({
    declarations: [
        UiKitComponent,
        ButtonsComponent,
        AvatarsComponent,
        CheckboxOverviewExample,
        TablesComponent,
        FieldsComponent,
        DropdownComponent,
        BreadcrumbComponent,
        SidenavComponent,
        ExpansionPanelComponent,
        StepperComponent,
        VoyageTableComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        TranslateModule,
        SharedModule,
        AtlpSharedModule,
    ],
    exports: [
        UiKitComponent,
        SharedModule
    ]
})

export class UiKitModule {
}
