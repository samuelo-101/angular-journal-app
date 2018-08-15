import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { SessionService } from '../service/session.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit, AfterViewChecked {

  backgroundImageSrc: String = '../assets/journal.jpg';

  constructor(private _router: Router, private _sessionService: SessionService) {
    
   }

  ngOnInit() {
  
  }

  ngAfterViewChecked() {
    if(this._sessionService.isSessionActive()) {
      this._router.navigate(['/journals']);
    }
  }

  goToSignIn() {
    this._router.navigate(['/login']);
  }

}
