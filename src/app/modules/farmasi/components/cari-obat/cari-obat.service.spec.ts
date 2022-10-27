import { TestBed } from '@angular/core/testing';

import { CariObatService } from './cari-obat.service';

describe('CariObatService', () => {
  let service: CariObatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CariObatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
