import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MFETodoComponent} from './todo.component';

@NgModule({
    declarations: [MFETodoComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: MFETodoComponent,
            },
        ]),
    ],
    exports: [
        MFETodoComponent
    ]
})
export class TodoModule {
}
