import { Component, OnInit } from '@angular/core';

import { Router } from  '@angular/router';

import { RegistrationRequest } from '../model/RegistrationRequest';
import { NgForm } from '@angular/forms';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationRequest: RegistrationRequest = new RegistrationRequest();
  showLoadingIndicator: Boolean = false;
  disableForm: Boolean = false;

  constructor(private router: Router, private apiService: ApiService) {

   }

  ngOnInit() {
    
  }

  _onSubmit() {
    this._showLoadingIndicator(true);
    console.log(this.registrationRequest);
    this.apiService.registerUser(this.registrationRequest)
    .subscribe(response => {
        console.log(response);
        setTimeout(() => { 
          this._showLoadingIndicator(false);
          this.router.navigate(['/login']);
        }, 2000);
      });
  }

  private _showLoadingIndicator(showLoading: Boolean): void {
    this.showLoadingIndicator = showLoading;
    this._setFormState(showLoading);
  }

  private _setFormState(disabled: Boolean): void {
    this.disableForm = disabled;
  }

}
