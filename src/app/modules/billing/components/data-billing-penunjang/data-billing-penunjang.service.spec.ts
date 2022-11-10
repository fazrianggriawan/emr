import { TestBed } from '@angular/core/testing';

import { DataBillingPenunjangService } from './data-billing-penunjang.service';

describe('DataBillingPenunjangService', () => {
  let service: DataBillingPenunjangService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataBillingPenunjangService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
