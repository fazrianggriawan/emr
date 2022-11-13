import { TestBed } from '@angular/core/testing';

import { DataSepService } from './data-sep.service';

describe('DataSepService', () => {
  let service: DataSepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataSepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
