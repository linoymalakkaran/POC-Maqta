import { AfterViewInit, Component, ViewChild, EventEmitter, Output } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { IconsService } from '@atlp/services/icons.service';
export interface PeriodicElement {
  number: string;
  name: string;
  port: string;
  terminal: string;
  rotation: number;
  eta: string;
  etd: string;
  agent: string;
  vc: string;
  vt: string;
  cr: string;
  mf: string;
  dl: string;
  ll: string;
  selected: boolean;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { number: '01345212373VSR', name: 'Valerie Schulte', port: 'Khalifa Port', terminal: 'Khalifa Terminal', rotation: 367983031, eta: '05/02/2021', etd: '10/03/2021', agent: 'CMA CMA', vc: '', vt: '', cr: '', mf: '', dl: '', ll: '', selected: false, },
  { number: '01345212373VSR', name: 'Valerie Schulte', port: 'Khalifa Port', terminal: 'Khalifa Terminal', rotation: 367983031, eta: '05/02/2021', etd: '10/03/2021', agent: 'CMA CMA', vc: '', vt: '', cr: '', mf: '', dl: '', ll: '', selected: false, },
  { number: '01345212373VSR', name: 'Valerie Schulte', port: 'Khalifa Port', terminal: 'Khalifa Terminal', rotation: 367983031, eta: '05/02/2021', etd: '10/03/2021', agent: 'CMA CMA', vc: '', vt: '', cr: '', mf: '', dl: '', ll: '', selected: false, },
  { number: '01345212373VSR', name: 'Valerie Schulte', port: 'Khalifa Port', terminal: 'Khalifa Terminal', rotation: 367983031, eta: '05/02/2021', etd: '10/03/2021', agent: 'CMA CMA', vc: '', vt: '', cr: '', mf: '', dl: '', ll: '', selected: false, },
  { number: '01345212373VSR', name: 'Valerie Schulte', port: 'Khalifa Port', terminal: 'Khalifa Terminal', rotation: 367983031, eta: '05/02/2021', etd: '10/03/2021', agent: 'CMA CMA', vc: '', vt: '', cr: '', mf: '', dl: '', ll: '', selected: false, },
  { number: '01345212373VSR', name: 'Valerie Schulte', port: 'Khalifa Port', terminal: 'Khalifa Terminal', rotation: 367983031, eta: '05/02/2021', etd: '10/03/2021', agent: 'CMA CMA', vc: '', vt: '', cr: '', mf: '', dl: '', ll: '', selected: false, },
  { number: '01345212373VSR', name: 'Valerie Schulte', port: 'Khalifa Port', terminal: 'Khalifa Terminal', rotation: 367983031, eta: '05/02/2021', etd: '10/03/2021', agent: 'CMA CMA', vc: '', vt: '', cr: '', mf: '', dl: '', ll: '', selected: false, },
  { number: '01345212373VSR', name: 'Valerie Schulte', port: 'Khalifa Port', terminal: 'Khalifa Terminal', rotation: 367983031, eta: '05/02/2021', etd: '10/03/2021', agent: 'CMA CMA', vc: '', vt: '', cr: '', mf: '', dl: '', ll: '', selected: false, },
  { number: '01345212373VSR', name: 'Valerie Schulte', port: 'Khalifa Port', terminal: 'Khalifa Terminal', rotation: 367983031, eta: '05/02/2021', etd: '10/03/2021', agent: 'CMA CMA', vc: '', vt: '', cr: '', mf: '', dl: '', ll: '', selected: false, },
  { number: '01345212373VSR', name: 'Valerie Schulte', port: 'Khalifa Port', terminal: 'Khalifa Terminal', rotation: 367983031, eta: '05/02/2021', etd: '10/03/2021', agent: 'CMA CMA', vc: '', vt: '', cr: '', mf: '', dl: '', ll: '', selected: false, },
  { number: '01345212373VSR', name: 'Valerie Schulte', port: 'Khalifa Port', terminal: 'Khalifa Terminal', rotation: 367983031, eta: '05/02/2021', etd: '10/03/2021', agent: 'CMA CMA', vc: '', vt: '', cr: '', mf: '', dl: '', ll: '', selected: false, },
  { number: '01345212373VSR', name: 'Valerie Schulte', port: 'Khalifa Port', terminal: 'Khalifa Terminal', rotation: 367983031, eta: '05/02/2021', etd: '10/03/2021', agent: 'CMA CMA', vc: '', vt: '', cr: '', mf: '', dl: '', ll: '', selected: false, },
  { number: '01345212373VSR', name: 'Valerie Schulte', port: 'Khalifa Port', terminal: 'Khalifa Terminal', rotation: 367983031, eta: '05/02/2021', etd: '10/03/2021', agent: 'CMA CMA', vc: '', vt: '', cr: '', mf: '', dl: '', ll: '', selected: false, },
  { number: '01345212373VSR', name: 'Valerie Schulte', port: 'Khalifa Port', terminal: 'Khalifa Terminal', rotation: 367983031, eta: '05/02/2021', etd: '10/03/2021', agent: 'CMA CMA', vc: '', vt: '', cr: '', mf: '', dl: '', ll: '', selected: false, },
  { number: '01345212373VSR', name: 'Valerie Schulte', port: 'Khalifa Port', terminal: 'Khalifa Terminal', rotation: 367983031, eta: '05/02/2021', etd: '10/03/2021', agent: 'CMA CMA', vc: '', vt: '', cr: '', mf: '', dl: '', ll: '', selected: false, },
];
/**
 * @title Basic use of `<mat-table>` (uses display flex)
 */
@Component({
  selector: 'table-rolled',
  templateUrl: './table-rolled.component.html',
  styleUrls: ['./table-rolled.component.scss']
})
export class TableRolledComponent implements AfterViewInit {
  /**
   * Constructor
   * @param {IconsService} _iconsService
   */
  constructor(
    private _iconsService: IconsService
  ) {
    // mat icon
    this._iconsService.registerIcons(this.icons);
  }
  displayedColumns: string[] = ['select', 'number', 'name', 'port', 'terminal', 'rotation', 'eta', 'etd', 'agent', 'vc', 'vt', 'cr', 'mf', 'dl', 'll'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle(): void {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }
  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.number + 1}`;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Private methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Register icon for current component
   */
  private get icons(): Array<string> {
    return ['plus-dark', 'table-success-icon', 'pending-icon-table', 'table-plus-icon', 'table-warn-icon', 'message-icon'];
  }
}