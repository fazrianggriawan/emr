import { TestBed } from '@angular/core/testing';

import { CariIcd9Service } from './cari-icd9.service';

describe('CariIcd9Service', () => {
  let service: CariIcd9Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CariIcd9Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
