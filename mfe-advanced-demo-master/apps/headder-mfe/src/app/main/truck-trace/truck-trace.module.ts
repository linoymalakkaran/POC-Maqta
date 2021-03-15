import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruckTraceComponent } from './truck-trace.component';
import { AtlpSharedModule } from '@atlp/shared.module';
import { SharedModule } from 'app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { AtlpSearchBarModule ,StepperModule} from '@atlp/components';
import { TruckTrackComponent } from './components';

const routes = [
  {
    path: '',
    component: TruckTraceComponent
  }
];


@NgModule({
  declarations: [TruckTraceComponent, TruckTrackComponent],
  imports: [
   RouterModule.forChild(routes),
    CommonModule,
    AtlpSharedModule,
    SharedModule,
    AtlpSearchBarModule,
    StepperModule
  ]
})
export class TruckTraceModule { }
