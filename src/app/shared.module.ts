import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressIndicatorComponent } from './progress-indicator/progress-indicator.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { MatFormFieldModule, MatButtonModule, MatCardModule, MatInputModule, MatGridListModule, MatListModule, MatProgressSpinnerModule, MatDialogModule, MatSnackBarModule, MatToolbarModule, MatIconModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatGridListModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,

    FormsModule,

  ],
  declarations: [ ProgressIndicatorComponent, SnackbarComponent ],
  exports: [ ProgressIndicatorComponent, SnackbarComponent,
    CommonModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatGridListModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule, FormsModule ],
  entryComponents: [SnackbarComponent],
})
export class SharedModule { }
