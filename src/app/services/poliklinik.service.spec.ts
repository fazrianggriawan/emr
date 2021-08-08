import { TestBed } from '@angular/core/testing';

import { PoliklinikService } from './poliklinik.service';

describe('PoliklinikService', () => {
  let service: PoliklinikService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoliklinikService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
