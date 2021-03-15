import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'voyage-table-basic',
  templateUrl: './voyage-table-basic.component.html',
  styleUrls: ['./voyage-table-basic.component.scss']
})
export class VoyageTableBasicComponent implements OnInit {
  @Input() tableType: string;
  constructor() { 

    
  }

  ngOnInit(): void {
  }

}

