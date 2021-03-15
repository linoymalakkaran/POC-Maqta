import { Component, OnInit,EventEmitter, Output} from '@angular/core';
import { AtlpSidebarService } from '@atlp/components/sidebar/sidebar.service';
import { SidebarName } from 'app/core/enums/sidebar-name.enum'

@Component({
  selector: 'informationpanel',
  templateUrl: './informationpanel.component.html',
  styleUrls: ['./informationpanel.component.scss']
})
export class InformationpanelComponent implements OnInit {
  SidebarName = SidebarName;

  @Output() changeState = new EventEmitter<SidebarName>();

   /**
   * Constructor
   * @param {AtlpSidebarService} _atplSidebarService
   */

  constructor(private _atplSidebarService: AtlpSidebarService) { }

 // open to components
  openSidebarComponents(key): void {
    this.changeState.emit(key);
  }

    /**
   * Toggle sidebar open
   *
   * @param key
   */
  toggleSidebarOpen(key): void {
    this._atplSidebarService.getSidebar(key).toggleOpen();
  }

  ngOnInit(): void {
  }

}
