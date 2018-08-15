import { Component, OnInit, Input } from '@angular/core';
import { DialogDataModel } from './model/DialogDataModel';
import { Router } from '../../node_modules/@angular/router';
import { SessionService } from './service/session.service';
import { EventService } from './service/event.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  backgroundSrc: String = "../assets/journal.jpg";

  constructor(private _router: Router, private _sessionService: SessionService) {
  
  }
  
  ngOnInit() {
    // if(!this._sessionService.isSessionActive()) {
    //   this._router.navigate(['/landing']);
    // }
  }
}
