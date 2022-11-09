import { TestBed } from '@angular/core/testing';

import { EditBillingService } from './edit-billing.service';

describe('EditBillingService', () => {
  let service: EditBillingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditBillingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
