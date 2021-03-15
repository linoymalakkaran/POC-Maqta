import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector   : 'atlp-confirm-dialog',
    templateUrl: './confirm-dialog.component.html',
    styleUrls  : ['./confirm-dialog.component.scss']
})
export class AtlpConfirmDialogComponent
{
    public confirmMessage: string;

    /**
     * Constructor
     *
     * @param {MatDialogRef<AtlpConfirmDialogComponent>} dialogRef
     */
    constructor(
        public dialogRef: MatDialogRef<AtlpConfirmDialogComponent>
    )
    {
    }

}
