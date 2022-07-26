import { TestBed } from '@angular/core/testing';

import { FarmasiService } from './farmasi.service';

describe('FarmasiService', () => {
  let service: FarmasiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FarmasiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
