import { TestBed } from '@angular/core/testing';

import { DataRegistrasiService } from './data-registrasi.service';

describe('DataRegistrasiService', () => {
  let service: DataRegistrasiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataRegistrasiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
