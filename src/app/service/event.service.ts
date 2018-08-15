import { Injectable, EventEmitter } from '@angular/core';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  dataEmitter: EventEmitter<User> = new EventEmitter<User>();

  constructor() { }

  emitPrincipal(principal: User) {
    this.dataEmitter.emit(principal);
  }
}
