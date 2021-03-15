import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoyagePageComponent } from './voyage-page.component';

import { AtlpSharedModule } from '@atlp/shared.module';
import { SharedModule } from 'app/shared/shared.module';
import { RouterModule } from '@angular/router';

import { AtlpSearchBarModule } from '@atlp/components';

import { 
  VoyageTableRichComponent,
  VoyageTableBasicComponent,
  TableCollapseComponent,
  TableRolledComponent
} from './components';

const routes = [
  {
    path: '',
    component: VoyagePageComponent
  }
];

@NgModule({
  declarations: [
    VoyagePageComponent,
    VoyageTableRichComponent,
    VoyageTableBasicComponent,
    TableCollapseComponent,
    TableRolledComponent

  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    AtlpSharedModule,
    SharedModule,
    AtlpSearchBarModule
  ],
})
export class VoyagePageModule { }
