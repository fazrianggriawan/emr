import { TestBed } from '@angular/core/testing';

import { DataSuratKontrolService } from './data-surat-kontrol.service';

describe('DataSuratKontrolService', () => {
  let service: DataSuratKontrolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataSuratKontrolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
