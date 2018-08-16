import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JournalsComponent } from './journals/journals.component';
import { ViewJournalComponent } from './view-journal/view-journal.component';
import { ComposeJournalComponent } from './compose-journal/compose-journal.component';

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
