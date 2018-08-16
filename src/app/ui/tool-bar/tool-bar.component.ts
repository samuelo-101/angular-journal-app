import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../model/User';
import { Router } from '@angular/router';
import { SessionService } from '../../service/session.service';
import { Dictionary } from '../../constants/Dictionary';
import { EventService } from '../../service/event.service';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit {

  @Input("principal") user: User;
  private _toolBarTitle: string = Dictionary.GENERIC_TOOLBAR_TITLE;

  constructor(private _router: Router, private _sessionService: SessionService, private _eventService: EventService) { }

  ngOnInit() {
  }

  navHome() {
    if(this._sessionService.isSessionActive()) {
      this._router.navigate(['/journals']);
    } else {
      this._router.navigate(['/landing']);
    }
  }

  signOut() {
    this._sessionService.purge();
    this._eventService.emitPrincipal(null);
    this._router.navigate(['/landing']);
  }

}
