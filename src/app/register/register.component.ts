import { Component, OnInit } from '@angular/core';

import { RegistrationRequest } from '../model/RegistrationRequest';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationRequest: RegistrationRequest = new RegistrationRequest();

  constructor() {

   }

  ngOnInit() {
    
  }

  _onSubmit() {
    console.log(this.registrationRequest);
  }

}
