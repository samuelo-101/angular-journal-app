import { TestBed, inject, getTestBed, async } from '@angular/core/testing';

import { ApiService } from './api.service';
import { LoginRequest } from '../model/LoginRequest';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { User } from '../model/User';
import { LoginResponse } from '../model/LoginResponse';
import { SharedModule } from '../shared/shared.module';
import { Journal } from '../model/Journal';

const BASE_URL = 'http://localhost:8080/api/v1/';

describe('ApiService', () => {

  let service: ApiService;
  let mockBackend: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, SharedModule],
      providers: [ApiService]
    });

    service = TestBed.get(ApiService); 
    mockBackend = TestBed.get(HttpTestingController);
    
  });

  afterEach(inject([HttpTestingController], (mockBackend: HttpTestingController) => {
    mockBackend.verify();
  }));

  it('login should succeed', inject([],
    (done) => {

      let loginRequest: LoginRequest = new LoginRequest();
      loginRequest.email = "test@mail.com";
      loginRequest.password = "testPassword";

      service.login(loginRequest)
        .subscribe(response => {
          console.log(response);
          expect(response.user).not.toBeNull();
          done();
        });

      const req = mockBackend.expectOne({ method: 'POST', url: `${BASE_URL}user/login` });
      expect(req.request.method).toEqual('POST');

      let loginResponse: LoginResponse = new LoginResponse();
      let user: User = new User(1, [1, 8, 2010, 4, 10]);
      user.firstName = 'Buddy';
      user.lastName = 'Guy';
      user.email = 'guy@mail.com';

      loginResponse.user = user;
      req.flush({ response: loginResponse });

    }));

    it('getJournalList should succeed', inject([],
      (done) => {

        service.getJournalList()
          .subscribe(response => {
            expect(response).not.toBeNull();
            done();
          });

        const req = mockBackend.expectOne({ method: 'GET', url: `${BASE_URL}journal/list` });

        let responseList: Journal[] = [];
        let journalOne: Journal = new Journal(1, 'title 1', 'content 1');
        let journalTwo: Journal = new Journal(1, 'title 2', 'content 2');
        responseList.push(journalOne);
        responseList.push(journalTwo);
  
        req.flush({ response: responseList });
  
      }));
});
