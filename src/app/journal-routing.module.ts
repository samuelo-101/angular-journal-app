import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JournalsComponent } from './journals/journals.component';
import { ViewJournalComponent } from './view-journal/view-journal.component';
import { ComposeJournalComponent } from './compose-journal/compose-journal.component';
import { RouterModule } from '@angular/router';

const routes = [
  { path: '', component: JournalsComponent },
  { path: 'view/:id', component: ViewJournalComponent },
  { path: 'compose', component: ComposeJournalComponent }
];  

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class JournalRoutingModule { }
