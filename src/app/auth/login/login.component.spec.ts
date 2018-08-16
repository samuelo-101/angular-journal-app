import { async, ComponentFixture, TestBed, inject, getTestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { ApiService } from '../../service/api.service';
import { of } from 'rxjs';
import { LoginResponse } from '../../model/LoginResponse';
import { User } from '../../model/User';
import { LoginRequest } from '../../model/LoginRequest';
import { SharedModule } from '../../shared/shared.module';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let apiService = ApiService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [HttpClient, HttpTestingController],
      imports: [HttpClientModule, HttpClientTestingModule,
        SharedModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    //apiService = getTestBed().overrideProvider(ApiService);
  });

  it('_onSubmit should be called', inject([ApiService], (http: HttpClient, backend: HttpTestingController) => {
    /*const headers = {
      headers: new HttpHeaders(
        { 'Content-Type': 'application/json' }
      )
    };

    let loginResponse: LoginResponse = new LoginResponse();
    let user: User = new User(1, [1, 8, 2010, 4, 10]);
    user.firstName = 'Buddy';
    user.lastName = 'Guy';
    user.email = 'guy@mail.com';

    loginResponse.user = user;

    let loginRequest: LoginRequest = new LoginRequest();
    loginRequest.email = user.email;
    loginRequest.password = 'testPassword';

    // http.post('/login', loginRequest, headers).subscribe();
    // backend.expectOne({
    //   url: '/foo/bar',
    //   method: 'GET'
    // });
    //spyOn(apiService, 'login').and.callThrough;
    spyOn(apiService, 'login').and.returnValue(of(loginResponse));

    async(apiService.login(loginRequest)
      .subscribe(response => {
        console.log(response);
      }));*/
  }));
});
