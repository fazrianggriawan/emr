import { TestBed } from '@angular/core/testing';

import { VclaimService } from './vclaim.service';

describe('VclaimService', () => {
  let service: VclaimService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VclaimService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
