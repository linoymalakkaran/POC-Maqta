import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackCargoComponent } from './track-cargo.component';
import { AtlpSharedModule } from '@atlp/shared.module';
import { SharedModule } from 'app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { AtlpSearchBarModule ,StepperModule} from '@atlp/components';


import { 
TrackCargoTableComponent,
TrackAndTraceComponent
} from './components';



const routes = [
  {
    path: '',
    component: TrackCargoComponent
  }
];

@NgModule({
  declarations: [TrackCargoComponent,TrackCargoTableComponent, TrackAndTraceComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    AtlpSharedModule,
    SharedModule,
    AtlpSearchBarModule,
    StepperModule
  ]
})
export class TrackCargoModule { }
