import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtlpSharedModule } from '@atlp/shared.module';
import { SharedModule } from 'app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { AtlpSearchBarModule ,StepperModule} from '@atlp/components';
import {InformationServicesComponent} from './information-services.component';
import { StatisticsComponent ,InformationpanelComponent,InformationComponent} from './components';




const routes = [
  {
    path: '',
    component: InformationServicesComponent
  }
];

@NgModule({
  declarations: [InformationServicesComponent, StatisticsComponent, InformationpanelComponent, InformationComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    AtlpSharedModule,
    SharedModule,
    AtlpSearchBarModule,
    StepperModule
  ]
})
export class InformationServicesModule { }
