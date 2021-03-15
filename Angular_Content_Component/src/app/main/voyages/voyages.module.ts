import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoyagesComponent } from './voyages.component';
import { AtlpSharedModule } from '@atlp/shared.module';
import { SharedModule } from 'app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { AtlpSearchBarModule ,StepperModule,KeyValueColumnModule,NumberInputModule} from '@atlp/components';
import { VoyageDetailsComponent } from './components';

const routes = [
  {
    path: '',
    component: VoyagesComponent
  }
];

@NgModule({
  declarations: [VoyagesComponent, VoyageDetailsComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    AtlpSharedModule,
    SharedModule,
    AtlpSearchBarModule,
    StepperModule,
    KeyValueColumnModule,
    NumberInputModule
  ]
})
export class VoyagesModule { }
