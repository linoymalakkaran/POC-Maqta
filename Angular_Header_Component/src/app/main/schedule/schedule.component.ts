import { Component, OnInit } from '@angular/core';
import { AtlpProgressBarService } from '@atlp/components/progress-bar/progress-bar.service';
import { IconsService } from '@atlp/services/icons.service';
import { Subject } from 'rxjs';
import { StepperData } from '@atlp/components/stepper/interfaces';


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
   nav_position: string = 'end';
   flight: string ='EY2222';
   toll: string = "800 10 2030";
   fax: string = '+97126952111';
   Email:string = 'Malta.gateway@adports.ae';
   info:any ={ 
       airwaybl: '777-1234567',
      origin: 'ICN',
      destination:'AUH',
      status: 'Delivered',
    }

     stepperData: StepperData[] = [
    
    {
      icon: 'step2',
      name: 'Departed Delhi',
      date: '09/12/2020 01:00 PM',
      active: false
    },
    {
      icon: 'step2-schedule',
      name: 'In Transit | 1 hour remainingAUH',
      date: 'Direct Flight | 03 hours 52 minus',
      active: false
    },
    {
      icon: 'step3-schedule',
      name: 'Arrived',
      date: '09/12/2020 05:00 PM',
      active: true
    },
  ];

    // Private
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   * @param {IconsService} _iconsService
   * @param {AtlpProgressBarService} _atlpProgressBarService
   */


  constructor(private _iconsService: IconsService,
    private _atlpProgressBarService: AtlpProgressBarService) {
            this._iconsService.registerIcons(this.icons);

    // Show the progress bar
    this._atlpProgressBarService.show();

    // Hide the progress bar
    //  this._atlpProgressBarService.hide();

    // Set the mode
    // mode: 'determinate' | 'indeterminate' | 'buffer' | 'query'
    this._atlpProgressBarService.setMode('determinate');

    // Set the value
    // value: number
    this._atlpProgressBarService.setValue(50);

    // Set the buffer value
    // bufferValue: number
    this._atlpProgressBarService.setBufferValue(40);

    // Set the private defaults
    this._unsubscribeAll = new Subject();
     }

     // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // ----
  ngOnInit(): void {
  }

    /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  onTogglePosition(position: string) {
    this.nav_position = position === 'start' ? 'end' : 'start';
  }

   // -----------------------------------------------------------------------------------------------------
  // @ Private methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Register icon for current component
   */
  private get icons(): Array<string> {
    return ['tel-icon', 'email-icon','close-white-icon'];
  }

}
