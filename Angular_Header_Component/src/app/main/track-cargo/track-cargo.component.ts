import { Component, OnInit ,OnDestroy} from '@angular/core';
import { IconsService } from '@atlp/services/icons.service';
import { Subject } from 'rxjs';
import { AtlpProgressBarService } from '@atlp/components/progress-bar/progress-bar.service';
import { StepperData } from '@atlp/components/stepper/interfaces';

@Component({
  selector: 'app-track-cargo',
  templateUrl: './track-cargo.component.html',
  styleUrls: ['./track-cargo.component.scss']
})
export class TrackCargoComponent implements OnInit {


 stepperData: StepperData[] = [
    {
      icon: 'step1',
      name: 'Booking Confirmed',
      date: 'dd/mm/yyyy',
      active: false
    },
    {
      icon: 'step2',
      name: 'Departed from ICN',
      date: 'dd/mm/yyyy',
      active: false
    },
    {
      icon: 'step3',
      name: 'Arrived at AUH',
      date: 'dd/mm/yyyy',
      active: false
    },
    {
      icon: 'step4',
      name: 'Received From Flight',
      date: 'dd/mm/yyyy',
      active: false
    },
    {
      icon: 'step5',
      name: 'Document Received',
      date: 'dd/mm/yyyy',
      active: false
    },
    {
      icon: 'step6',
      name: 'Delivered',
      date: 'dd/mm/yyyy',
      active: true
    }
  ];


   nav_position: string = 'end';
   airwaybl: string ='777-1234567';
   toll: string = "800 10 2030";
   fax: string = '+97126952111';
   Email:string = 'Malta.gateway@adports.ae';
   info ={ 
     Scheduled: '14:45',
      actual: '15:00',
      origin: 'AUH',
      terminal: 'T3',
    }

   // Private
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   * @param {IconsService} _iconsService
   * @param {AtlpProgressBarService} _atlpProgressBarService
   */

  constructor(  private _iconsService: IconsService,
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
    return ['close-white-icon', 'plus-dark','save-icon', 'tel-icon','email-icon'];
  }
}
