import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import {
  MatFormFieldModule, MatButtonModule,
  MatCardModule, MatInputModule, MatGridListModule,
  MatListModule, MatProgressSpinnerModule, MatDialogModule, 
  MatSnackBarModule, MatToolbarModule, 
} from '@angular/material';

import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './/app-routing.module';
import { LandingComponent } from './landing/landing.component';

import { HttpClientModule } from '@angular/common/http';
import { ProgressIndicatorComponent } from './progress-indicator/progress-indicator.component';
import { DialogComponent } from './dialog/dialog.component';
import { SnackbarComponent } from './snackbar/snackbar.component';

import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { EventService } from './service/event.service';
import { JournalRoutingModule } from './journal-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthModule } from './auth.module';
import { JournalModule } from './journal.module';
import { SharedModule } from './shared.module';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    DialogComponent,
    ToolBarComponent,
    PageNotFoundComponent
  ],
  imports: [     
    SharedModule,

    BrowserModule,
    BrowserAnimationsModule,

    AppRoutingModule,

    HttpClientModule
  ],
  exports: [],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
