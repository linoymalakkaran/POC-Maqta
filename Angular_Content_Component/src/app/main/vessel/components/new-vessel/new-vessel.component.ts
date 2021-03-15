import { Component, Input, OnInit } from '@angular/core';
import { AtlpSidebarService } from '@atlp/components/sidebar/sidebar.service';
import { SidebarName } from 'app/core/enums/sidebar-name.enum';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'new-vessel',
  templateUrl: './new-vessel.component.html',
  styleUrls: ['./new-vessel.component.scss']
})
export class NewVesselComponent implements OnInit {

  messageTitle: string = 'Are you sure you want to quit?';
  messagesubtitle: string = "You haven’t completed the vessel call request."
  messagesbutton1Text: string = "Continue Editing"
  @Input() showMessage: boolean;
  // Public
  SidebarName = SidebarName;
  public typeFiles = ['pdf', 'jpg', 'jpeg', 'png', 'mp4', 'css'];

  /**
   * Constructor
   * @param {AtlpSidebarService} _atplSidebarService
   */
  constructor(
    private _atplSidebarService: AtlpSidebarService,
    private _snackBar: MatSnackBar
  ) { }

  openSnackBar() {
    this._snackBar.openFromComponent(SnackComponent, {
      duration: 5000,
    });
  }

  ngOnInit(): void {
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  // loadedFiles
  public loadedFiles(files): void {
    console.log('loadedFiles', files);
  }

  /**
   * Toggle sidebar open
   * @param key
   */
  toggleSidebarOpen(key): void {
    this._atplSidebarService.getSidebar(key).toggleOpen();
  }

  continueEditing = (args: any): void => {
    //callback code here
    this._atplSidebarService.getSidebar(SidebarName.vesselwithmessage).toggleOpen();
    this._atplSidebarService.getSidebar(SidebarName.vessel).toggleOpen();
  }
  QuitEditing = (args: any): void => {
    this._atplSidebarService.getSidebar(SidebarName.vesselwithmessage).toggleOpen();
  }

}
@Component({
  selector: 'snack-bar-component-example-snack',
  template: `<img src="assets/images/success-icon.svg" alt=""><span>Vessel Call Saved Successfully</span><button type="button"><img src="assets/images/closse-snack.svg" alt=""></button>`,
})
export class SnackComponent { }
