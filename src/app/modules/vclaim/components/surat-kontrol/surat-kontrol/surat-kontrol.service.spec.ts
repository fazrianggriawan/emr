import { TestBed } from '@angular/core/testing';

import { SuratKontrolService } from './surat-kontrol.service';

describe('SuratKontrolService', () => {
  let service: SuratKontrolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuratKontrolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
