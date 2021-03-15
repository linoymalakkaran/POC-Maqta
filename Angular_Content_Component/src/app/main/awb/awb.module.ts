import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtlpSharedModule } from '@atlp/shared.module';
import { SharedModule } from 'app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { AtlpSearchBarModule } from '@atlp/components';

import { 
  AwbRenominateComponent
} from './components';

import { AwbComponent } from './awb.component';

const routes = [
  {
    path: '',
    component: AwbComponent
  }
];

@NgModule({
  declarations: [
    AwbComponent,
    AwbRenominateComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    AtlpSharedModule,
    SharedModule,
    AtlpSearchBarModule
  ]
})
export class AwbModule { }
