import { Component, OnInit,Input } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'flight-schedule',
  templateUrl: './flight-schedule.component.html',
  styleUrls: ['./flight-schedule.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class FlightScheduleComponent implements OnInit {
@Input() flight: string;
 @Input() toll : string;
 @Input() fax: string;
 @Input() Email:string;
 @Input() info:any;
@Input() stepperData;
  constructor() { }

  ngOnInit(): void {
  }

}
