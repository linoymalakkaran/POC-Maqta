import { Component, OnInit } from '@angular/core';
import { SidebarName } from 'app/core/enums/sidebar-name.enum';
import { AtlpSidebarService } from '@atlp/components/sidebar/sidebar.service';

@Component({
  selector: 'vessel-map',
  templateUrl: './vessel-map.component.html',
  styleUrls: ['./vessel-map.component.scss']
})
export class VesselMapComponent implements OnInit {
  SidebarName = SidebarName;

  /**
   * Constructor
   * @param {AtlpSidebarService} _atplSidebarService
   */
  constructor(
    private _atplSidebarService: AtlpSidebarService
  ) { }

  ngOnInit(): void {
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  
  /**
   * Toggle sidebar open
   *
   * @param key
   */
  toggleSidebarOpen(key): void {
    this._atplSidebarService.getSidebar(key).toggleOpen();
  }

}
