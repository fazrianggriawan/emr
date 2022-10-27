import { TestBed } from '@angular/core/testing';

import { DataStokService } from './data-stok.service';

describe('DataStokService', () => {
  let service: DataStokService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataStokService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
