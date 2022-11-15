import { TestBed } from '@angular/core/testing';

import { LaporanTransaksiBillingService } from './laporan-transaksi-billing.service';

describe('LaporanTransaksiBillingService', () => {
  let service: LaporanTransaksiBillingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaporanTransaksiBillingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
