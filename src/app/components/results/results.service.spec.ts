import { TestBed } from '@angular/core/testing';

import { ResultsService } from './results.service';
import { environment } from 'src/environments/environment';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpErrorResponse } from '@angular/common/http';
import { Data } from '@angular/router';
const DeleteObj = {
  color : 'red',
  gender : 'male',

}
const Mockcolor = 'green';
const MockGen = 'male';
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


describe('ResultsService', () => {
  let service: ResultsService;
  let httpTestCtrl : HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientTestingModule]
    });
    service = TestBed.inject(ResultsService);
  });
  beforeEach(() => {
    service = TestBed.get(ResultsService);
    httpTestCtrl = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('submitnominGreen', () => {
    service.fetchresults(Mockcolor,MockGen).subscribe((posts) =>{
      expect(posts).toEqual([Mockcolor,MockGen], 'should check mock data');
    });
    const req =  httpTestCtrl.expectOne(environment.apiUrl + '/api/results/' + Mockcolor + '/' + MockGen);
    expect(req.request.method).toBe('GET');
    expect(req.cancelled).toBeFalsy();
    req.flush([Mockcolor,MockGen])
  });

  it('DeleteVote', () => {
    service.Deletevote(DeleteObj).subscribe((posts) =>{
      expect(posts).toEqual([Mockcolor,MockGen], 'should check mock data');
    });
    const req =  httpTestCtrl.expectOne(environment.apiUrl + '/api/reset/abc');
    expect(req.request.method).toBe('POST');
    expect(req.cancelled).toBeFalsy();
    req.flush([Mockcolor,MockGen])
  });

  it('DeleteVote error', (done) => {
    const mockError = {error: 'someError'} as ErrorEvent;
    service.Deletevote(DeleteObj).subscribe(() => {}, (thrownError) =>{
      console.log('t',thrownError);
      console.log(mockError);

      expect(thrownError.error).toEqual(mockError);
      done();
    });
    const req =  httpTestCtrl.expectOne(environment.apiUrl + '/api/reset/abc');
    req.error(mockError);
});


});
