import { Component, Input, OnInit } from '@angular/core';
import { AtlpSidebarService } from '@atlp/components/sidebar/sidebar.service';
import { SidebarName } from 'app/core/enums/sidebar-name.enum'

@Component({
  selector: 'atlp-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {

  SidebarName = SidebarName;
  @Input() title:string;
  @Input() subtitle:string;
  @Input() content:string;
  @Input() faq;
   /**
   * Constructor
   * @param {AtlpSidebarService} _atplSidebarService
   */
  constructor(private _atplSidebarService: AtlpSidebarService) {

   }

  ngOnInit(): void {
  }
  /**
   * Toggle sidebar open
   *
   * @param key
   */
  toggleSidebarOpen(key): void {
    this._atplSidebarService.getSidebar(key).toggleOpen();
  }
}
