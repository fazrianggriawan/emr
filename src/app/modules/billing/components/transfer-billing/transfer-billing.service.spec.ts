import { TestBed } from '@angular/core/testing';

import { TransferBillingService } from './transfer-billing.service';

describe('TransferBillingService', () => {
  let service: TransferBillingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransferBillingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
