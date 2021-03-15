import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentsComponent } from './appointments.component';

import { AtlpSharedModule } from '@atlp/shared.module';
import { SharedModule } from 'app/shared/shared.module';
import { RouterModule } from '@angular/router';

import { AtlpSearchBarModule } from '@atlp/components';
 


const routes = [
  {
    path: '',
    component: AppointmentsComponent
  }
];

@NgModule({
  declarations: [
    AppointmentsComponent,
 
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    AtlpSharedModule,
    SharedModule,
    AtlpSearchBarModule
  ]
})
export class AppointmentsModule { }
