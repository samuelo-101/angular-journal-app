import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(public snackbar: MatSnackBar) { }

  show(message: string): void {
    const config = new MatSnackBarConfig();
    config.duration = 2000;
    config.data = {
      message: message
    };
    this.snackbar.open(message, "OK", config);
  }
}
