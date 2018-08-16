import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthRoutingModule } from './auth-routing.module';
import { MatCardModule, MatFormFieldModule, MatListModule, MatProgressSpinnerModule, MatIconModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared.module';
import { AuthComponent } from './auth.component';

@NgModule({
  imports: [
    CommonModule,
    
    
    AuthRoutingModule,


    MatCardModule,
    FormsModule,

    MatFormFieldModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatIconModule,
    SharedModule,
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthComponent,
  ]
})
export class AuthModule { }
