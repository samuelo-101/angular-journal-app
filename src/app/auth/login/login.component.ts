import { Component, OnInit, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { LoginRequest } from '../../model/LoginRequest';
import { ApiService } from '../../service/api.service';
import { User } from '../../model/User';
import { SnackbarComponent } from '../../ui/snackbar/snackbar.component';
import { SessionService } from '../../service/session.service';
import { Router } from '@angular/router';
import { EventService } from '../../service/event.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  entryComponents: [SnackbarComponent]
})
export class LoginComponent implements OnInit {

  loginRequest: LoginRequest = new LoginRequest();
  showLoadingIndicator: Boolean = false;

  @Output() userEventEmitter: EventEmitter<User> = new EventEmitter();

  constructor(private _sessionService: SessionService,
    private apiService: ApiService, private _router: Router,
    private _eventService: EventService) { }

  ngOnInit() {

  }

  _onSubmit(): void {
    console.log(this.loginRequest);

    this.showLoadingIndicator = true;

    this.apiService.login(this.loginRequest)
      .subscribe(response => {
        console.log(response);
        this.showLoadingIndicator = false;
        if (response) {
          const user = response.user;
          this._sessionService.setPrincipal(user);
          this._eventService.emitPrincipal(response.user);
          this._router.navigate(['/journals']);
        }
      }, error => {
        console.log('Error', error);
      });
  }

}
