import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtlpSharedModule } from '@atlp/shared.module';
import { SharedModule } from 'app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { AtlpSearchBarModule } from '@atlp/components';

import { 
  ImportAirwayComponent
} from './components';

import { AirwayComponent } from './airway.component';

const routes = [
  {
    path: '',
    component: AirwayComponent
  }
];

@NgModule({
  declarations: [
    AirwayComponent,
    ImportAirwayComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    AtlpSharedModule,
    SharedModule,
    AtlpSearchBarModule
  ]
})
export class AirwayModule { }
