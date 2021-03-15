import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, ViewChild ,OnInit} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


// select interface
interface Sort {
  value: string;
  viewValue: string;
}
export interface PeriodicElement {
  airwaybl: string;
  origin: string;
  destination: string;
  status: string;
  date: string;
  time: string;
  pieces: number;
  flight: string;
  remarks: string;
  selected: boolean;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { airwaybl: "777-1234567", origin: 'ICN', destination: 'AUH', status: 'Delivered', date: '29/08/2020', time: '13:00', pieces:5, flight: 'EY110033', remarks: '---', selected: false, },
  { airwaybl: "777-1234567", origin: 'ICN', destination: 'AUH', status: 'Delivered', date: '29/08/2020', time: '13:00', pieces:5, flight: 'EY110033', remarks: '---', selected: false, },
  { airwaybl: "777-1234567", origin: 'ICN', destination: 'AUH', status: 'Delivered', date: '29/08/2020', time: '13:00', pieces:5, flight: 'EY110033', remarks: '---', selected: false, },
  { airwaybl: "777-1234567", origin: 'ICN', destination: 'AUH', status: 'Delivered', date: '29/08/2020', time: '13:00', pieces:5, flight: 'EY110033', remarks: '---', selected: false, },
  { airwaybl: "777-1234567", origin: 'ICN', destination: 'AUH', status: 'Delivered', date: '29/08/2020', time: '13:00', pieces:5, flight: 'EY110033', remarks: '---', selected: false, },
  { airwaybl: "777-1234567", origin: 'ICN', destination: 'AUH', status: 'Delivered', date: '29/08/2020', time: '13:00', pieces:5, flight: 'EY110033', remarks: '---', selected: false, },
 { airwaybl: "777-1234567", origin: 'ICN', destination: 'AUH', status: 'Delivered', date: '29/08/2020', time: '13:00', pieces:5, flight: 'EY110033', remarks: '---', selected: false, },
  { airwaybl: "777-1234567", origin: 'ICN', destination: 'AUH', status: 'Delivered', date: '29/08/2020', time: '13:00', pieces:5, flight: 'EY110033', remarks: '---', selected: false, },
  { airwaybl: "777-1234567", origin: 'ICN', destination: 'AUH', status: 'Delivered', date: '29/08/2020', time: '13:00', pieces:5, flight: 'EY110033', remarks: '---', selected: false, },
  { airwaybl: "777-1234567", origin: 'ICN', destination: 'AUH', status: 'Delivered', date: '29/08/2020', time: '13:00', pieces:5, flight: 'EY110033', remarks: '---', selected: false, },
];

/**
 * @title Basic use of `<mat-table>` (uses display flex)
 */
@Component({
  selector: 'track-cargo-table',
  templateUrl: './track-cargo-table.component.html',
  styleUrls: ['./track-cargo-table.component.scss']
})
export class TrackCargoTableComponent implements OnInit {

 sorts: Sort[] = [
    {value: 'Sort', viewValue: 'Sort'},
    {value: 'Sort-1', viewValue: 'Sort 1'},
    {value: 'Sort-2', viewValue: 'Sort 2'}
  ];
    displayedColumns: string[] = [ 'airwaybl', 'origin', 'destination', 'status', 'date', 'time', 'pieces', 'flight', 'remarks'];
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
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.airwaybl + 1}`;
  }

  getRecord(row){
    document.getElementById('mybtn-add').click()
  }

  constructor() { }

  ngOnInit(): void {
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
