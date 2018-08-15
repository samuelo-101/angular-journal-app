import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  dataEmitter: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  emit(data: any) {
    this.dataEmitter.emit(data);
  }
}
