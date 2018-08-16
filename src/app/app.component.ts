import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { DialogDataModel } from './model/DialogDataModel';
import { Router, NavigationEnd } from '../../node_modules/@angular/router';
import { SessionService } from './service/session.service';
import { EventService } from './service/event.service';
import { User } from './model/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  backgroundSrc: String = "../assets/journal.jpg";

  private _principal: User;
  private _routeSubscription: any;
  private _eventSubscription: any;

  constructor(private _router: Router, private _sessionService: SessionService, private _eventService: EventService) {

  }

  ngOnInit() {
    this._routeSubscription = this._router.events.subscribe(route => {
      if (route instanceof NavigationEnd && route.url !== "/user/login" && route.url !== "/user/register") {
        if (!this._sessionService.isSessionActive()) {
          this._router.navigate(['/landing']);
        }
      }
    })

    this._eventSubscription = this._eventService.dataEmitter.subscribe(principal => {
      this._principal = principal;
    });
  }

  ngOnDestroy() {
    this._routeSubscription.unsubscribe();
    this._eventSubscription.unsubscribe();
  }
}
