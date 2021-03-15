import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { AtlpSidebarService } from '@atlp/components/sidebar/sidebar.service';
import { SidebarName } from 'app/core/enums/sidebar-name.enum'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'information-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StatisticsComponent implements OnInit {
  selected = []
  fullempty:string ;
  loading:string;
  SidebarName = SidebarName;

  FormGroupOne: FormGroup;
  FormGroupTwo:FormGroup;

  GeographicalRegions = [
    {Name:'North Africa'},
    {Name:'South and East Africa'},
     {Name:'West Africa'},
    {Name:'Oceania'},
      {Name: 'Atlantic Canada & ' , SecondName:'Great Lakes'},
    {Name:'Central America and', SecondName:'Caribean'},
     {Name:'Atlantic Europe'},
    {Name:'Far East'},
    {Name:'Gulf of Mexico'},
    {Name:'Arabian Gulf'},
     {Name:'Mediterranean Region'},
    {Name:'Red Sea'},
     {Name:'Near East'},
    {Name:'North America Atlantic'},
     {Name:'North America Pacific'},
    {Name:'Indian Subcontinent'},
    {Name:'Central & South America' , SecondName:'Atlantic'},
    {Name:'South America Pacific'},
     {Name:'South East Asia'},
    {Name:'Northern Europe'},
     {Name:'Eastern Europe'},
    {Name:'Central Asia Region'},
     {Name:'Middle East'},
    {Name:'Other'},

  ]

  CargoTypes = [
    {Name:"Empty Container"},
    {
      Name:'FCL'
    },{
      Name:'General Cargo'
    },
    {Name:'LCL'},
    {Name:'Passenger'},
    {Name:'Bulk Liquid'},
    {Name:'RO-RO Unit'},
    {Name:'Bulk Solid'}
  ]

 /**
   * Constructor
   * @param {AtlpSidebarService} _atplSidebarService
   * @param {FormBuilder} _formBuilder
   */

  constructor(private _atplSidebarService: AtlpSidebarService,
      private _formBuilder: FormBuilder) { 
            this.initialFormOne();
            this.initialFormtwo();
  }

   /**
   * Toggle sidebar open
   *
   * @param key
   */
  toggleSidebarOpen(key): void {
    this._atplSidebarService.getSidebar(key).toggleOpen();
  }

  ngOnInit(): void {
  }

  changeLoading(event, value:string){
     if(this.loading === value) {
       document.getElementById(value).classList.remove("mat-radio-checked");
       this.loading = ""
    }
    else {
       
          document.getElementById(value).classList.add("mat-radio-checked");
          document.getElementById(this.loading)?.classList.remove("mat-radio-checked");
           this.loading = value
    }
  }

  fullemptychange(event, value:string){
    if(this.fullempty === value) {
       document.getElementById(value).classList.remove("mat-radio-checked");
       this.fullempty = ""
    }
    else {
        this.fullempty = value
          document.getElementById(value).classList.add("mat-radio-checked");
    }
  }

  checkboxupdate(event , value: string){
    if(this.selected.includes(value)){
      this.selected = this.selected.filter(elm => elm != value)
       document.getElementById(value).classList.remove("mat-radio-checked");
    }
    else {
      this.selected.push(value)
      document.getElementById(value).classList.add("mat-radio-checked");
    }
    
  }

    private initialFormOne(): void {
    this.FormGroupOne = this._formBuilder.group({
      'compare':["", []],
      'fromOne':["",[]],
      'toOne':["",[]],
      'fromTwo':["",[]],
      'toTwo':["",[]]
    });
  }
    private initialFormtwo(): void {
    this.FormGroupTwo = this._formBuilder.group({
     
    });
  }
  
}
