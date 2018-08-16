import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JournalsComponent } from './journals/journals.component';
import { ViewJournalComponent } from './view-journal/view-journal.component';
import { ComposeJournalComponent } from './compose-journal/compose-journal.component';
import { RouterModule } from '@angular/router';

const routes = [
  { path: 'journals', component: JournalsComponent },
  { path: 'journal/:id', component: ViewJournalComponent },
  { path: 'journal/compose', component: ComposeJournalComponent }
];  

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class JournalRoutingModule { }
