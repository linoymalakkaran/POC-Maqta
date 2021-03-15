import { Component, OnInit,Input,ViewChild ,ViewEncapsulation} from '@angular/core';
import { FilePickerComponent, FilePreviewModel, ValidationError } from 'ngx-awesome-uploader';
import { DemoFilePickerAdapter } from 'app/core/adapters/demo-file-picker.adapter';
import { HttpClient } from '@angular/common/http';
import { TypeFile } from 'app/core/enums/type-file.enum';
import { IconsService } from '@atlp/services/icons.service';

@Component({
  selector: 'heavy-duty',
  templateUrl: './heavy-duty.component.html',
  styleUrls: ['./heavy-duty.component.scss'],
   encapsulation: ViewEncapsulation.None
})
export class HeavyDutyComponent implements OnInit {

@ViewChild('uploader', { static: true }) uploader: FilePickerComponent;
  adapter = new DemoFilePickerAdapter(this._http);
  myFiles: FilePreviewModel[] = [];

  TypeFile = TypeFile;
  constructor( private _iconsService: IconsService,
    private _http: HttpClient) { 

        this._iconsService.registerIcons(this.icons);
    }

  ngOnInit(): void {
  }
  public onValidationError(error: ValidationError): void {
    alert(`Validation Error ${error.error} in ${error.file.name}`);
  }
  public onUploadSuccess(e: FilePreviewModel): void {
  }
  public onRemoveSuccess(e: FilePreviewModel) {
  }
  public onFileAdded(file: FilePreviewModel) {
    this.myFiles.push(file);
    this.myFiles.forEach(element => {
      switch (element.file.type) {
        case TypeFile.PNG:
          this._iconsService.registerIcons(['png-icon']);
          break;

        case TypeFile.PDF:
          this._iconsService.registerIcons(['pdf-icon']);
          break;

        default:
          break;
      }
    });
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Private methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Register icon for current component
   */
  private get icons(): Array<string> {
    return ['pdf-icon', 'file-remove', 'folder'];
  }
}
