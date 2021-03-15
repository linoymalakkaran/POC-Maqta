import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { IconsService } from '@atlp/services/icons.service';
import { CardStatus } from '@atlp/components/voyage/enums/card-status.enum';
import { IVoyageData } from '@atlp/components/voyage/interfaces/IVoyage';

const VOYAGE: IVoyageData[] = [
  {
    info: {
      countMessage: 0,
      status: '',
      title: 'VALERIE SCHULTE',
      id: '073VSR',
      name: 'CMA CGM SHIPPI',
      iconCompany: 'cma_cgm',
      port: '🇦🇪Khalifa Port',
      terminal: 'Khalifa terminal (ADT)',
      time: '10:00 AM',
      date: '02/10/2021'
    },
    rotation: {
      status: null,
      statusText: '',
      id: 15020039,
      time: '21:25',
      date: '17/06/2021'
    },
    customs: {
      status: CardStatus.approved,
      statusText: 'Approved',
      time: '21:25',
      date: '17/06/2021'
    },
    terminal: {
      status: CardStatus.rejected,
      statusText: 'Rejected',
      time: '21:25',
      date: '17/06/2021'
    },
    callRequest: {
      status: CardStatus.pending,
      statusText: 'Pending',
      time: '21:25',
      date: '17/06/2021',
      textInfo: 'SENT'
    },
    manifest: {
      status: CardStatus.approved,
      statusText: 'Approved',
      time: '21:25',
      date: '17/06/2021'
    },
    discharge: {
      status: CardStatus.addDl,
      statusText: 'Add D.L.',
      textDescr: 'No Discharge List Added'
    },
    loading: {
      status: CardStatus.addLl,
      statusText: 'Add L.L.',
      time: '21:25',
      date: '17/06/2021',
      textInfo: 'Submit before',
      duration: 37800
    }
  },
  {
    info: {
      countMessage: 2,
      status: 'warning',
      title: 'ESPERANZA N',
      id: 'MG0676381811',
      name: 'Rais Hassan Saadi…',
      iconCompany: 'rais',
      port: '🇦🇪Khalifa Port',
      terminal: 'Khalifa terminal (ADT)',
      time: '10:00 AM',
      date: '02/10/2021'
    },
    rotation: {
      status: CardStatus.na,
      statusText: 'N/A',
      id: null,
    },
    customs: {
      status: CardStatus.approved,
      statusText: 'Approved',
      time: '21:25',
      date: '17/06/2021'
    },
    terminal: {
      status: CardStatus.approved,
      statusText: 'Approved',
      time: '21:25',
      date: '17/06/2021',
    },
    callRequest: {
      status: CardStatus.addCr,
      statusText: 'Add CR',
      time: '21:25',
      date: '17/06/2021',
      textInfo: 'Submit before',
      duration: 37800
    },
    manifest: {
      status: CardStatus.addMf,
      statusText: 'Add MF',
      time: '21:25',
      date: '17/06/2021',
      textDescr: 'No Manifest Added'
    },
    discharge: {
      status: CardStatus.addDl,
      statusText: 'Add D.L.',
      textDescr: 'No Discharge List Added'
    },
    loading: {
      status: CardStatus.addLl,
      statusText: 'Add L.L.',
      time: '',
      date: '',
      textInfo: '',
      textDescr: 'No Loading List Added'
    }
  },
  {
    info: {
      countMessage: 0,
      status: '',
      title: 'QUEEN MARY 2',
      id: 'MG0676381811',
      name: 'MEDITERRANEAN…',
      iconCompany: 'queen_mary',
      port: '🇦🇪Khalifa Port',
      terminal: 'Khalifa terminal',
      time: '05:00 PM',
      date: '01/19/2021'
    },
    rotation: {
      status: null,
      statusText: '',
      id: 1901004218,
      time: '21:25',
      date: '17/06/2021'
    },
    customs: {
      status: CardStatus.blocked,
      statusText: 'Blocked',
      time: '21:25',
      date: '17/06/2021'
    },
    terminal: {
      status: CardStatus.blocked,
      statusText: 'Blocked',
      time: '21:25',
      date: '17/06/2021'
    },
    callRequest: {
      status: CardStatus.approved,
      statusText: 'Approved',
      time: '21:25',
      date: '17/06/2021',
      update: 'Last update',
      addition: 'SR'
    },
    manifest: {
      status: CardStatus.blocked,
      statusText: 'Blocked',
      time: '21:25',
      date: '17/06/2021'
    },
    discharge: {
      status: CardStatus.blocked,
      statusText: 'Blocked',
      time: '21:25',
      date: '17/06/2021'
    },
    loading: {
      status: CardStatus.blocked,
      statusText: 'Blocked',
      time: '21:25',
      date: '17/06/2021'
    }
  },
  {
    info: {
      countMessage: 0,
      status: '',
      title: 'VALERIE SCHULTE',
      id: '073VSR',
      name: 'CMA CGM SHIPPI',
      iconCompany: 'cma_cgm',
      port: '🇦🇪Khalifa Port',
      terminal: 'Khalifa terminal (ADT)',
      time: '10:00 AM',
      date: '02/10/2021'
    },
    rotation: {
      status: null,
      statusText: '',
      id: 1901005397,
    },
    customs: {
      status: CardStatus.approved,
      statusText: 'Approved',
      time: '21:25',
      date: '17/06/2021'
    },
    terminal: {
      status: CardStatus.approved,
      statusText: 'Approved',
      time: '21:25',
      date: '17/06/2021'
    },
    callRequest: {
      status: CardStatus.approved,
      statusText: 'Approved',
      time: '21:25',
      date: '17/06/2021',
      update: 'Last update',
      addition: 'SR'
    },
    manifest: {
      status: CardStatus.approved,
      statusText: 'Approved',
      time: '21:25',
      date: '17/06/2021',
      update: 'Last update',
      addition: 'SR'
    },
    discharge: {
      status: CardStatus.approved,
      statusText: 'Approved',
      time: '21:25',
      date: '17/06/2021',
      update: 'Last update',
      addition: 'SR'
    },
    loading: {
      status: CardStatus.added,
      statusText: 'Added',
      time: '21:25',
      date: '17/06/2021'
    }
  },
  {
    info: {
      countMessage: 0,
      status: '',
      title: 'VALERIE SCHULTE',
      id: '073VSR',
      name: 'CMA CGM SHIPPI',
      iconCompany: 'cma_cgm',
      port: '🇦🇪Khalifa Port',
      terminal: 'Khalifa terminal (ADT)',
      time: '10:00 AM',
      date: '02/10/2021'
    },
    rotation: {
      status: null,
      statusText: '',
      id: 200200617,
    },
    customs: {
      status: CardStatus.approved,
      statusText: 'Approved',
      time: '21:25',
      date: '17/06/2021'
    },
    terminal: {
      status: CardStatus.approved,
      statusText: 'Approved',
      time: '21:25',
      date: '17/06/2021'
    },
    callRequest: {
      status: CardStatus.approved,
      statusText: 'Approved',
      time: '21:25',
      date: '17/06/2021',
    },
    manifest: {
      status: CardStatus.addMf,
      statusText: 'Add MF',
      textDescr: 'No Manifest Added',
    },
    discharge: {
      status: CardStatus.addDl,
      statusText: 'Add D.L.',
      textDescr: 'No Discharge List Added',
    },
    loading: {
      status: CardStatus.addLl,
      statusText: 'Add L.L.',
      textDescr: 'No Loading List Added',
    }
  },
  {
    info: {
      countMessage: 0,
      status: '',
      title: 'VALERIE SCHULTE',
      id: '073VSR',
      name: 'CMA CGM SHIPPI',
      iconCompany: 'cma_cgm',
      port: '🇦🇪Khalifa Port',
      terminal: 'Khalifa terminal (ADT)',
      time: '10:00 AM',
      date: '02/10/2021'
    },
    rotation: {
      status: null,
      statusText: '',
      id: 200200617,
    },
    customs: {
      status: CardStatus.approved,
      statusText: 'Approved',
      time: '21:25',
      date: '17/06/2021'
    },
    terminal: {
      status: CardStatus.approved,
      statusText: 'Approved',
      time: '21:25',
      date: '17/06/2021'
    },
    callRequest: {
      status: CardStatus.approved,
      statusText: 'Approved',
      time: '21:25',
      date: '17/06/2021',
    },
    manifest: {
      status: CardStatus.addMf,
      statusText: 'Add MF',
      textDescr: 'No Manifest Added',
    },
    discharge: {
      status: CardStatus.addDl,
      statusText: 'Add D.L.',
      textDescr: 'No Discharge List Added',
    },
    loading: {
      status: CardStatus.addLl,
      statusText: 'Add L.L.',
      textDescr: 'No Loading List Added',
    }
  }
];
@Component({
  selector: 'voyage-table-rich',
  templateUrl: './voyage-table-rich.component.html',
  styleUrls: ['./voyage-table-rich.component.scss']
})

export class VoyageTableRichComponent implements OnInit, AfterViewInit {
  CardStatus = CardStatus;
  /**
  * Constructor
  * 
  * @param {IconsService} _iconsService
  */
  constructor(
    private _iconsService: IconsService
  ) {
    // mat icon
    this._iconsService.registerIcons(this.icons);
  }

  // table
  displayedColumns: string[] = ['flow', 'type', 'book', 'container', 'iso', 'line', 'info', 'expiry'];
  dataSource = new MatTableDataSource(VOYAGE);
  selection = new SelectionModel(true, []);
  @ViewChild(MatPaginator) paginator: MatPaginator;


  ngOnInit(): void {

  }

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
    this.isAllSelected() ? this.selection.clear() : this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.flow + 1}`;
  }

  deselect(row): void{
    this.selection.toggle(row);
  }

  /**
   * Getter src company icon 
   * @name - type string
  */
  public srcCompany(name: string): string {
    return `assets/images/${name}.png`;
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Private methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Register icon for current component
   */
  private get icons(): Array<string> {
    return ['plus-dark', 'voyage-icon-one', 'message-active-icon', 'voyage-icon-two', 'x-fill-purple-dark', 'print-black', 'smock-icon', 'copy-black', 'plus-white'];
  }
}

