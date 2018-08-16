import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing', component:  LandingComponent},
  { path: 'user/login', loadChildren: './auth.module#AuthModule' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
