import { TestBed } from '@angular/core/testing';

import { EportalService } from './eportal.service';

describe('EportalService', () => {
  let service: EportalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EportalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
