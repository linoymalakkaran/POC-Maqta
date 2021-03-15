import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeavyDutyContainerComponent } from './heavy-duty-container.component';
import { AtlpSharedModule } from '@atlp/shared.module';
import { SharedModule } from 'app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { AtlpSearchBarModule ,StepperModule} from '@atlp/components';
import { HeavyDutyComponent } from './component';


const routes = [
  {
    path: '',
    component: HeavyDutyContainerComponent
  }
];


@NgModule({
  declarations: [HeavyDutyContainerComponent, HeavyDutyComponent],
  imports: [
      RouterModule.forChild(routes),
    CommonModule,
    AtlpSharedModule,
    SharedModule,
    AtlpSearchBarModule,
    StepperModule
  ]
})
export class HeavyDutyContainerModule { }
