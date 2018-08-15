import { Injectable } from '@angular/core';
import { RegistrationRequest } from '../model/RegistrationRequest';
 
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginRequest } from '../model/LoginRequest';
import { SnackbarService } from './snackbar.service';
import { SessionService } from './session.service';
import { LoginResponse } from '../model/LoginResponse';
import { JournalItem } from '../model/JournalItem';
import { CreateJournalRequest } from '../model/CreateJournalRequest';
import { Journal } from '../model/Journal';

const BASE_URL = 'http://localhost:8080/api/v1/';
const API_HEADER = {
  headers: new HttpHeaders(
    { 'Content-Type': 'application/json' }
  )
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private snackbarService: SnackbarService, private sessionService: SessionService) { }

  registerUser(registrationRequest: RegistrationRequest): Observable<any> {
    const urlPath = `${BASE_URL}user/register`;
    return this.http.put(urlPath, registrationRequest, API_HEADER)
    .pipe(
      tap(_ => console.log(_)),
      catchError(this.handleError<void>('registerUser'))
    );
  }

  login(loginRequest: LoginRequest): Observable<LoginResponse> {
    const urlPath = `${BASE_URL}user/login`;
    return this.http.post<LoginResponse>(urlPath, loginRequest, API_HEADER)
    .pipe(
      tap(response => {
        console.log(response);
      }),
      catchError(this.handleError<LoginResponse>('login'))
    );
  }

  getJournalListForUser() {

  }
  getJournalList(): Observable<Journal[]> {
    const urlPath = `${BASE_URL}journal/list`;
    return this.http.get<Journal[]>(urlPath, API_HEADER)
    .pipe(
      tap(journals => console.log(journals)),
      catchError(this.handleError<Journal[]>('Could not fetch Journals'))
    );
    
  }

  getJournalCountForUser(): Observable<number> {
    const principal = this.sessionService.getPrincipal();
    const urlPath = `${BASE_URL}journal/count/${principal.id}`;
  
    return this.http.get<number>(urlPath, API_HEADER)
    .pipe(
      tap(
        count => console.log(count)
      ),
      catchError(this.handleError<number>('Could not fetch Journal count'))
    );
  }

  getJournalById(journalId: number): Observable<Journal> {
    const urlPath = `${BASE_URL}journal/${journalId}`;
    return this.http.get<Journal>(urlPath, API_HEADER)
    .pipe(
      tap(journal => console.log(journal)),
      catchError(this.handleError<Journal>('Could not get Journal'))
    );
  }

  createJournal(journal: JournalItem): Observable<any> {
    const principal = this.sessionService.getPrincipal();
    const urlPath = `${BASE_URL}journal/create`;

    const createJournalRequest = new CreateJournalRequest();
    createJournalRequest.userId = principal.id;
    createJournalRequest.title = journal.title;
    createJournalRequest.content = journal.content;

    return this.http.post(urlPath, createJournalRequest, API_HEADER)
    .pipe(
      tap(
        _ => console.log(_)
      ),
      catchError(this.handleError('Could not create journal'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      this.snackbarService.show(`${operation} failed`);
      return of(result as T);
    }
  }

}
