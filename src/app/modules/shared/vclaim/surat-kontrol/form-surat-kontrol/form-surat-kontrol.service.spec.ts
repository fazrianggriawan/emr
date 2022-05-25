import { TestBed } from '@angular/core/testing';

import { FormSuratKontrolService } from './form-surat-kontrol.service';

describe('FormSuratKontrolService', () => {
  let service: FormSuratKontrolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormSuratKontrolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
