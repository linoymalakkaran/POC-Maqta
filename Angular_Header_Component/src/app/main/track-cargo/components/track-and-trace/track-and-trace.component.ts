import { Component, OnInit,Input } from '@angular/core';
import { StepperData } from '@atlp/components/stepper/interfaces';



@Component({
  selector: 'track-and-trace',
  templateUrl: './track-and-trace.component.html',
  styleUrls: ['./track-and-trace.component.scss']
})

export class TrackAndTraceComponent implements OnInit {
  

  constructor() { }

 @Input() airwaybl: string;
 @Input() toll : string;
 @Input() fax: string;
 @Input() Email:string;
 @Input() info:any;
@Input() stepperData
  ngOnInit(): void {
  }

}
