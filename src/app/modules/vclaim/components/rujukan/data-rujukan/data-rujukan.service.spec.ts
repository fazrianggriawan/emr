import { TestBed } from '@angular/core/testing';

import { DataRujukanService } from './data-rujukan.service';

describe('DataRujukanService', () => {
  let service: DataRujukanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataRujukanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
