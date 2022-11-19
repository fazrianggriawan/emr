import { TestBed } from '@angular/core/testing';

import { CariIcd10Service } from './cari-icd10.service';

describe('CariIcd10Service', () => {
  let service: CariIcd10Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CariIcd10Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
