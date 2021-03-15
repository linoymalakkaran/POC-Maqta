import { filter } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { AtlpSidebarService } from '@atlp/components/sidebar/sidebar.service';
import { SidebarName } from 'app/core/enums/sidebar-name.enum';
import { IconsService } from '@atlp/services/icons.service';

@Component({
  selector: 'voyage-page',
  templateUrl: './voyage-page.component.html',
  styleUrls: ['./voyage-page.component.scss']
})
export class VoyagePageComponent implements OnInit {
  // sidebar
  SidebarName = SidebarName;
  typeViewBasic: boolean;
  showFilters: boolean; 
  tableType: 'collapse' | 'rolled';
  appliedfilters = [
    'Accepted',
  ];

  SearchbyOptions1 = [
    { label: 'Vessel Name', selectOptions: [] },
    { label: 'Voyage Number', selectOptions: [] },
    { label: 'Voyage IMO Number', selectOptions: [] },
    { label: 'Vessel Agent', selectOptions: [] },
    { label: 'Rotation Number', selectOptions: [] },
    {
      label: 'Country',
      selectOptions: ['Algeria', 'Argentina', 'Belize', 'Benin', 'Brazil'],
      recentSelectOptions: ['Spain', 'South Africa']
    },
    // {label:'Voyage IMO Number'},
    { label: 'Boking Number', selectOptions: [] }
  ];

  /**
   * Constructor
   * @param {IconsService} _iconsService 
   * @param {AtlpSidebarService} _atplSidebarService
   */
  constructor(
    private _iconsService: IconsService,
    private _atplSidebarService: AtlpSidebarService
  ) {
    this.showFilters = true;
    this.typeViewBasic = false;
    this.tableType = 'collapse';
    this._iconsService.registerIcons(this.icons);
  }

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
  /**
   * Svitch table view type
   *
   */
  onSwitchView(): void {
    this.typeViewBasic = !this.typeViewBasic;
  }

  onValChange(value): void{
    this.tableType = value;
  }

  toggleFilters = (args: any): void => {
    // callback code here
    this.showFilters = !this.showFilters;
  }

  changeFilters = (filter: string): void => {
    if (filter !== '') {
      // callback code here
      if (this.appliedfilters.includes(filter)) {
        this.appliedfilters = this.appliedfilters.filter(elem => elem !== filter);
      }
      else {
        this.appliedfilters.push(filter);
      }
    }
  }
  clearfilters = (): void => {
    this.appliedfilters = [];
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

  // -----------------------------------------------------------------------------------------------------
  // @ Private methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Register icon for current component
   */
  private get icons(): Array<string> {
    return ['close-white-icon', 'minimize-arrows', 'table-icon-two', 'table-icon-one', 'open-icon', 'plus-white', 'open-table-icon-active', 'open-table-icon', 'filter-icon', 'small-close-btn', 'soc-icon', 'download-icon', 'print-icon', 'credit-card-fill', 'back-arrow'];
  }
}


