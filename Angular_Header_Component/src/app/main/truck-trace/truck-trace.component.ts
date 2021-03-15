import { Component, OnInit } from '@angular/core';
import { AtlpProgressBarService } from '@atlp/components/progress-bar/progress-bar.service';
import { IconsService } from '@atlp/services/icons.service';
import { Subject } from 'rxjs';
import { StepperData } from '@atlp/components/stepper/interfaces';

@Component({
  selector: 'app-truck-trace',
  templateUrl: './truck-trace.component.html',
  styleUrls: ['./truck-trace.component.scss']
})
export class TruckTraceComponent implements OnInit {
 nav_position: string = 'end';
 TruckNumber: string = 'TR4773';
  toll: string = "800 10 2030";
  fax: string = '+97126952111';
  Email:string = 'Malta.gateway@adports.ae';
  Info: any = {
    truckCompany:'ABC Company limited holding',
    appNumber:20201226135257,
    appointmentaDate: '20/09/2020 09:00AM',
    Containers:'MSWRASWGWW',
    Transaction:'RE DM',
    Timelapsed:'00.12.32'
  }

 stepperData: StepperData[] = [
    {
      icon: 'stepper-arrow',
      name: 'Gate in',
      date: 'dd/mm/yyyy',
      active: false
    },
    {
      icon: 'tool',
      name: 'Repair facility',
      date: '-',
      active: false
    },
    {
      icon: 'stepper-file',
      name: 'Check in',
      date: 'dd/mm/yyyy',
      active: true
    },
    {
      icon: 'stepper-roadmap',
      name: 'tRANSFER AREA',
      date: '-',
      active: false
    },
    {
      icon: 'stepper-file',
      name: 'check out',
      date: '-',
      active: false
    },
    {
      icon: 'stepper-arrow',
      name: 'check out',
      date: '-',
      active: false
    }
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
    return ['close-white-icon','tel-icon', 'email-icon',];
  }
}
