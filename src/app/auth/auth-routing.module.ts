import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  // { path: 'journals', loadChildren: './journal.module#JournalModule' },
  // { path: 'user', children: [
  //   { path: 'login', component: LoginComponent },
  //   { path: 'register', component: RegisterComponent }
  // ] },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ], 
  declarations: []
})
export class AuthRoutingModule { }
