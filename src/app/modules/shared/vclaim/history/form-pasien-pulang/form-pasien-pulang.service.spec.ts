import { TestBed } from '@angular/core/testing';

import { FormPasienPulangService } from './form-pasien-pulang.service';

describe('FormPasienPulangService', () => {
  let service: FormPasienPulangService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormPasienPulangService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
