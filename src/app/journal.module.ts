import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JournalRoutingModule } from './journal-routing.module';
import { JournalsComponent } from './journals/journals.component';
import { ViewJournalComponent } from './view-journal/view-journal.component';
import { ComposeJournalComponent } from './compose-journal/compose-journal.component';
import { JournalCardComponent } from './journal-card/journal-card.component';
import { MatIconModule, MatCardModule, MatFormFieldModule, MatListModule } from '@angular/material';
import { JournalListPipe } from './pipe/journal-list.pipe';
import { JournalPipe } from './pipe/journal.pipe';
import { FormsModule } from '@angular/forms';
import { ProgressIndicatorComponent } from './progress-indicator/progress-indicator.component';
import { SharedModule } from './shared.module';

@NgModule({
  imports: [
    SharedModule,

    CommonModule,
    JournalRoutingModule,
  ],
  declarations: [
    JournalsComponent,
    ViewJournalComponent,
    ComposeJournalComponent,
    JournalCardComponent,

    JournalListPipe,
    JournalPipe,
  ]
})
export class JournalModule { }
