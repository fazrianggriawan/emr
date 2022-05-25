import { TestBed } from '@angular/core/testing';

import { PrbService } from './prb.service';

describe('PrbService', () => {
  let service: PrbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
