import { Component, OnInit ,Input} from '@angular/core';
import { AtlpSidebarService } from '@atlp/components/sidebar/sidebar.service';
import { SidebarName } from 'app/core/enums/sidebar-name.enum';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'voyage-details',
  templateUrl: './voyage-details.component.html',
  styleUrls: ['./voyage-details.component.scss']
})
export class VoyageDetailsComponent implements OnInit {
  

  SidebarName = SidebarName;

  @Input() VoyageNumber : string ;
  @Input() vessel:string;
  @Input() port: string;

  voyageDetails = {
    voyageNumber:20201226135257,
    TransitN:20201226135257,
    ExportN:20201226135257,
    transitoutVN:20201226135257,
    reexport:20201226135257,
    tempImport:20201226135257,
    voyageNumberIn:20201226135257,
    voyageNumberOut:20201226135257,
    mastername:'Booking',
    shippingLine:'BayLines',
    localVoyagein:20201226135257,
    localvoyageout:20201226135257,
    voyageType:'BayLines',
    terminal:'Khalifa port',
    services:'Middle East Express',
    imo:'98657533',
    specailmovement:'No',
    securityLevel:'1',
    lastPort:'Khor Al phakkan',
    nextPort:'Khor Al phakkan',
    ata: '12/12/2020',
    atd:'12/12/2020',
    
  }

 // Public
  public inputNumberForm: FormGroup;
 

  /**
   * Constructor
   * @param {AtlpSidebarService} _atplSidebarService
   * @param {FormBuilder} _formBuilder
   */

  constructor(private _atplSidebarService: AtlpSidebarService, private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initialInputNumberForm()
  }


   // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Change current value input  
   * @param formControlName 
   * @param operation 
   */
  public changesInputNumber(formControlName: string, operation: string){
    let value = +this.inputNumberForm.controls[formControlName].value;
    
    if(operation === 'decrement' && value === 0 || value == null) return;

    if(operation === 'increment'){
      value += 1;
    } else if(operation === 'decrement'){
      value -= 1;
    }
    
    this.inputNumberForm.controls[formControlName].setValue(value);
  }
 

 /**
   * Toggle sidebar open
   *
   * @param key
   */
  toggleSidebarOpen(key): void {
    this._atplSidebarService.getSidebar(key).toggleOpen();
  }

  /**
   * Initial number input form
   */
  private initialInputNumberForm() {
    this.inputNumberForm = this._formBuilder.group({
      "numberInput": ["", []],
    });
  }
  

 UpdateInputNumber(id: string , operation:string) {
   let value ;
  if((<HTMLInputElement>document.getElementById(id)).value == "")
  {
      value = 0
  }
  else {
    value = parseInt((<HTMLInputElement>document.getElementById(id)).value)
  }
    if(operation === 'decrement' && value === 0 || value == null) return;

    if(operation === 'increment'){
      value += 1;
    } else if(operation === 'decrement'){
      value -= 1;
    }
    var inputElement = <HTMLInputElement>document.getElementById(id)
   inputElement.value = value.toString();
   }
}
