import { TestBed } from '@angular/core/testing';

import { TambahBillingOperasiService } from './tambah-billing-operasi.service';

describe('TambahBillingOperasiService', () => {
  let service: TambahBillingOperasiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TambahBillingOperasiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
