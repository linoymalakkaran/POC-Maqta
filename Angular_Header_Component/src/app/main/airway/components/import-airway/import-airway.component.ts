import { Component, OnInit } from '@angular/core';
import { IconsService } from '@atlp/services/icons.service';
import { SidebarName } from 'app/core/enums/sidebar-name.enum';
import { AtlpSidebarService } from '@atlp/components/sidebar/sidebar.service';

@Component({
  selector: 'import-airway',
  templateUrl: './import-airway.component.html',
  styleUrls: ['./import-airway.component.scss']
})
export class ImportAirwayComponent implements OnInit {
  SidebarName = SidebarName;

  /**
   * Constructor
   * @param {IconsService} _iconsService
   * @param {AtlpSidebarService} _atplSidebarService
   */
  constructor(
    private _iconsService: IconsService,
    private _atplSidebarService: AtlpSidebarService
  ) {
    // mat icon
    this._iconsService.registerIcons(this.icons);
  }

  ngOnInit(): void {
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Private methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Toggle sidebar open
   *
   * @param key
   */
  toggleSidebarOpen(key): void {
    this._atplSidebarService.getSidebar(key).toggleOpen();
  }

  /**
   * Register icon for current component
   */
  private get icons(): Array<string> {
    return ['icon-plus', 'print-icon'];
  }

}
