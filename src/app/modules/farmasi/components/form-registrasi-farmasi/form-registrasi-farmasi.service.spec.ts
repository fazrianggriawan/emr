import { TestBed } from '@angular/core/testing';

import { FormRegistrasiFarmasiService } from './form-registrasi-farmasi.service';

describe('FormRegistrasiFarmasiService', () => {
  let service: FormRegistrasiFarmasiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormRegistrasiFarmasiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
