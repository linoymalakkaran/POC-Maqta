import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtlpSharedModule } from '@atlp/shared.module';
import { SharedModule } from 'app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { AtlpSearchBarModule ,MessagesModule} from '@atlp/components';

import { 
  NewVesselComponent,
  GeneralDetailsComponent,
  VesselMapComponent
} from './components';

import { VesselComponent } from './vessel.component';

const routes = [
  {
    path: '',
    component: VesselComponent
  }
];

@NgModule({
  declarations: [
    VesselComponent,
    NewVesselComponent,
    GeneralDetailsComponent,
    VesselMapComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    AtlpSharedModule,
    SharedModule,
    AtlpSearchBarModule,
    MessagesModule
  ]
})
export class VesselModule { }
