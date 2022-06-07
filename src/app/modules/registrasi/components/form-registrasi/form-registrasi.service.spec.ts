import { TestBed } from '@angular/core/testing';

import { FormRegistrasiService } from './form-registrasi.service';

describe('FormRegistrasiService', () => {
  let service: FormRegistrasiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormRegistrasiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
