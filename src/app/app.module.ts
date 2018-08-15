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


import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import { LandingComponent } from './landing/landing.component';
import { RegisterComponent } from './register/register.component';

import { HttpClientModule } from '@angular/common/http';
import { ProgressIndicatorComponent } from './progress-indicator/progress-indicator.component';
import { DialogComponent } from './dialog/dialog.component';
import { SnackbarComponent } from './snackbar/snackbar.component';

import { JournalsComponent } from './journals/journals.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { EventService } from './service/event.service';
import { ComposeJournalComponent } from './compose-journal/compose-journal.component';
import { FormElementDirective } from './directive/form-element.directive';
import { JournalListPipe } from './pipe/journal-list.pipe';
import { ViewJournalComponent } from './view-journal/view-journal.component';
import { JournalCardComponent } from './journal-card/journal-card.component';
import { JournalPipe } from './pipe/journal.pipe';
import { UserDisplayPipe } from './pipe/user-display.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingComponent,
    RegisterComponent,
    ProgressIndicatorComponent,
    DialogComponent,
    SnackbarComponent,
    JournalsComponent,
    ToolBarComponent,
    ComposeJournalComponent,
    FormElementDirective,
    JournalListPipe,
    ViewJournalComponent,
    JournalCardComponent,
    JournalPipe,
    UserDisplayPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
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
    HttpClientModule
  ],
  exports: [SnackbarComponent],
  entryComponents: [SnackbarComponent],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
