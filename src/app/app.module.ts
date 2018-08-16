import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './/app-routing.module';
import { LandingComponent } from './landing/landing.component';

import { HttpClientModule } from '@angular/common/http';
import { EventService } from './service/event.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SharedModule } from './shared/shared.module';
import { DialogComponent } from './ui/dialog/dialog.component';
import { ToolBarComponent } from './ui/tool-bar/tool-bar.component';

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
