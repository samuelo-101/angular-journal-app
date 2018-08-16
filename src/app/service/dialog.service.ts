import { Injectable, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent } from '../ui/dialog/dialog.component';
import { DialogDataModel } from '../model/DialogDataModel';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private _dialog: MatDialog, private _dialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogDataModel) { }

  show(data: DialogDataModel): void {
    this._dialogRef = this._dialog.open(DialogComponent, { 
      width: '250px',
      data: data
   });

    this._dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  close(): void {
    this._dialogRef.close();
  }

}
