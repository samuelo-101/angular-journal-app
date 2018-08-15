import { Component, OnInit, Input } from '@angular/core';
import { User } from '../model/User';
import { Router } from '@angular/router';
import { SessionService } from '../service/session.service';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit {

  @Input("principal") user: User;

  constructor(private _router: Router, private _sessionService: SessionService) { }

  ngOnInit() {
  }

  navHome() {
    if(this._sessionService.isSessionActive()) {
      this._router.navigate(['/journals']);
    } else {
      this._router.navigate(['/landing']);
    }
  }

}
