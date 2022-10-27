import { TestBed } from '@angular/core/testing';

import { StokOpnameService } from './stok-opname.service';

describe('StokOpnameService', () => {
  let service: StokOpnameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StokOpnameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
