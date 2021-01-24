import { TestBed } from '@angular/core/testing';

import { EportalService } from './eportal.service';
import { environment } from 'src/environments/environment';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

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

fdescribe('EportalService', () => {
  let service: EportalService;
  let httpTestCtrl : HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(EportalService);
  });
  beforeEach(() => {
    service = TestBed.get(EportalService);
    httpTestCtrl = TestBed.get(HttpTestingController);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('submitnominGreen', () => {
    service.submitvote(Mockdata1).subscribe((posts) =>{
      expect(posts).toBe(Mockdata1, 'should check mock data');
    });
    const req =  httpTestCtrl.expectOne(environment.apiUrl + `/api/submitevote/vote`);
    expect(req.request.method).toBe('POST');
    expect(req.cancelled).toBeFalsy();
    req.flush(Mockdata1)
  });
});
