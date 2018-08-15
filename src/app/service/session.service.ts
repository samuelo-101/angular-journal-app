import { Injectable } from '@angular/core';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private _principal: User = null;

  constructor() { }

  setPrincipal(principal: User): void {
    this._principal = principal;
    console.log('setPrincipal', this._principal);
  }

  getPrincipal(): User {
    return this._principal;
  }

  public isSessionActive(): boolean {
    return this._principal !== null;
  }

  purge(): void {
    this._principal = null;
  }
}
