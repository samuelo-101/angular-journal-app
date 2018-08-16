import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';

const routes = [
  { path: '', component: AuthComponent },
  { path: 'user/login', component: LoginComponent },
  { path: 'user/register', component: RegisterComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ], 
  declarations: []
})
export class AuthRoutingModule { }
