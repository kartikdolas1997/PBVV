import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { AuthenticateService } from './authenticate.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { environment } from 'src/environments/environment';

const Mockdata1 = {
  G1: `Girl1`,
  G2: `Girl2`,
  G3: `Girl3`,
  G4: `Girl4`,
  B1: `Boy1`,
  B2: `Boy2`,
  B3: `Boy3`,
  B4: `Boy4`,
}

describe('AuthenticateService', () => {
  let service: AuthenticateService;
  let httpTestCtrl : HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(AuthenticateService);
  });
  beforeEach(() => {
    service = TestBed.get(AuthenticateService);
    httpTestCtrl = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('submitnomin', () => {
    service.submitnomin(Mockdata1).subscribe((posts) =>{
      expect(posts).toBe(Mockdata1, 'should check mock data');
    });
    const req =  httpTestCtrl.expectOne(environment.apiUrl + `/api/customize/red`);
    expect(req.request.method).toBe('POST');
    expect(req.cancelled).toBeFalsy();
    req.flush(Mockdata1)
  });

  it('submitnominYellow', () => {
    service.submitnominYellow(Mockdata1).subscribe((posts) =>{
      expect(posts).toBe(Mockdata1, 'should check mock data');
    });
    const req =  httpTestCtrl.expectOne(environment.apiUrl + `/api/customize/yellow`);
    expect(req.request.method).toBe('POST');
    expect(req.cancelled).toBeFalsy();
    req.flush(Mockdata1)
  });

  it('submitnominblue', () => {
    service.submitnominBlue(Mockdata1).subscribe((posts) =>{
      expect(posts).toBe(Mockdata1, 'should check mock data');
    });
    const req =  httpTestCtrl.expectOne(environment.apiUrl + `/api/customize/blue`);
    expect(req.request.method).toBe('POST');
    expect(req.cancelled).toBeFalsy();
    req.flush(Mockdata1)
  });

  it('submitnominGreen', () => {
    service.submitnominGreen(Mockdata1).subscribe((posts) =>{
      expect(posts).toBe(Mockdata1, 'should check mock data');
    });
    const req =  httpTestCtrl.expectOne(environment.apiUrl + `/api/customize/green`);
    expect(req.request.method).toBe('POST');
    expect(req.cancelled).toBeFalsy();
    req.flush(Mockdata1)
  });
});
