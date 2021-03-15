import { Component, OnInit } from '@angular/core';
import { SidebarName } from 'app/core/enums/sidebar-name.enum';
import { AtlpSidebarService } from '@atlp/components/sidebar/sidebar.service';

@Component({
  selector: 'awb-renominate',
  templateUrl: './awb-renominate.component.html',
  styleUrls: ['./awb-renominate.component.scss']
})
export class AwbRenominateComponent implements OnInit {
  SidebarName = SidebarName;

  renominateData = [
    {
      Agent: 'SHARAF SHIPPING AGENCY LLC',
     'LOREM_IPSUM':'HBL3832479',
      "CHARGES_description":'Terminal Handling Charges',
      'UNIT_PRICE':36.75
    },
    {
      Agent: 'SHARAF SHIPPING AGENCY LLC',
     'LOREM_IPSUM':'HBL3832479',
      "CHARGES_description":'Terminal Handling Charges',
      'UNIT_PRICE':36.75
    },
    {
      Agent: 'SHARAF SHIPPING AGENCY LLC',
     'LOREM_IPSUM':'HBL3832479',
      "CHARGES_description":'Terminal Handling Charges',
      'UNIT_PRICE':36.75
    },
    {
      Agent: 'SHARAF SHIPPING AGENCY LLC',
     'LOREM_IPSUM':'HBL3832479',
      "CHARGES_description":'Terminal Handling Charges',
      'UNIT_PRICE':36.75
    }
  ]

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
   * Search
   *
   * @param value
   */
  search(value): void {
    // Do your search here...
    console.log(value);
  }
}
