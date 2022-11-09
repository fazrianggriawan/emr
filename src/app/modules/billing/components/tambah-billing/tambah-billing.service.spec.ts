import { TestBed } from '@angular/core/testing';

import { TambahBillingService } from './tambah-billing.service';

describe('TambahBillingService', () => {
  let service: TambahBillingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TambahBillingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
