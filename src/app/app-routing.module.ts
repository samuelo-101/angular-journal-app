import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { patch } from '../../node_modules/webdriver-js-extender';

import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { RegisterComponent } from './register/register.component';
import { JournalsComponent } from './journals/journals.component';
import { ComposeJournalComponent } from './compose-journal/compose-journal.component';
import { ViewJournalComponent } from './view-journal/view-journal.component';

const routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'landing', component:  LandingComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'journals', component: JournalsComponent },
  { path: 'journal/compose', component: ComposeJournalComponent },
  { path: 'journal/:id', component: ViewJournalComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
