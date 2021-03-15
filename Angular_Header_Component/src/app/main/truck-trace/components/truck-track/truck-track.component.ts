import { Component, Input, OnInit,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'truck-track',
  templateUrl: './truck-track.component.html',
  styleUrls: ['./truck-track.component.scss'],
   encapsulation: ViewEncapsulation.None
})
export class TruckTrackComponent implements OnInit {

  @Input() TruckNumber: string;
   @Input() toll : string;
 @Input() fax: string;
 @Input() Email:string;
 @Input() Info:any;
 @Input() stepperData;
  constructor() { }

  ngOnInit(): void {
  }

}
