import { TestBed } from '@angular/core/testing';

import { EKlaimService } from './e-klaim.service';

describe('EKlaimService', () => {
  let service: EKlaimService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EKlaimService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
