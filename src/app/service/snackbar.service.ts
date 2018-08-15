import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '../../../node_modules/@angular/material';
import { SnackbarComponent } from '../snackbar/snackbar.component';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(public snackbar: MatSnackBar) { }

  show(message: string): void {
    const config = new MatSnackBarConfig();
    config.duration = 1000;
    config.data = {
      message: message
    };
    this.snackbar.open(message);
  }
}
