import { Component, OnInit } from '@angular/core';
import { AtlpProgressBarService } from '@atlp/components/progress-bar/progress-bar.service';
import { IconsService } from '@atlp/services/icons.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-heavy-duty-container',
  templateUrl: './heavy-duty-container.component.html',
  styleUrls: ['./heavy-duty-container.component.scss']
})
export class HeavyDutyContainerComponent implements OnInit {
 nav_position: string = 'end';
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
    return ['close-white-icon'];
  }
}
