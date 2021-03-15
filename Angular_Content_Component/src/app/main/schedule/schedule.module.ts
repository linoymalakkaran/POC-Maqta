import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from './schedule.component';
import { AtlpSharedModule } from '@atlp/shared.module';
import { SharedModule } from 'app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { AtlpSearchBarModule ,StepperModule} from '@atlp/components';
import { FlightScheduleComponent } from './components';


const routes = [
  {
    path: '',
    component: ScheduleComponent
  }
];

@NgModule({
  declarations: [ScheduleComponent, FlightScheduleComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    AtlpSharedModule,
    SharedModule,
    AtlpSearchBarModule,
    StepperModule
  ]
})
export class ScheduleModule { }
