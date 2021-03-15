import { Component, OnInit } from '@angular/core';
import { IconsService } from '@atlp/services/icons.service';
import { Subject } from 'rxjs';
import { AtlpProgressBarService } from '@atlp/components/progress-bar/progress-bar.service';
import { AtlpSidebarService } from '@atlp/components/sidebar/sidebar.service';
import { SidebarName } from 'app/core/enums/sidebar-name.enum';

@Component({
  selector: 'app-voyages',
  templateUrl: './voyages.component.html',
  styleUrls: ['./voyages.component.scss']
})
export class VoyagesComponent implements OnInit {
  nav_position: string = 'end';
  SidebarName = SidebarName;
  VoyageNumber: string = 'FPOD-TXP-1302';
  vessel: string = 'BasleExpress';
  port: string = 'Khalifa Port';
  // Private
  private _unsubscribeAll: Subject<any>;

  /**
  * Constructor
  * @param {IconsService} _iconsService
  * @param {AtlpProgressBarService} _atlpProgressBarService
  * @param {AtlpSidebarService} atplSidebarService
  */

  constructor(private _iconsService: IconsService,
    private _atlpProgressBarService: AtlpProgressBarService,
    public atplSidebarService: AtlpSidebarService) {
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
    this._atlpProgressBarService.setValue(32);

    // Set the buffer value
    // bufferValue: number
    this._atlpProgressBarService.setBufferValue(32);
  }


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
  /**
   * Search
   *
   * @param value
   */
  search(value): void {
    // Do your search here...
    console.log(value);
  }
  /**
     * Toggle sidebar open
     *
     * @param key
     */
  toggleSidebarOpen(key): void {
    this.atplSidebarService.getSidebar(key).toggleOpen();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Private methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Register icon for current component
   */
  private get icons(): Array<string> {
    return ['close-white-icon', 'filter-icon', 'soc-icon', 'plus-white', 'open-table-icon', 'copy-icon', 'print-icon', 'download-icon', 'delete-button', 'info-icon', 'piker-icon', 'data-icon-white'];
  }

}
