import { TestBed } from '@angular/core/testing';

import { RikkesService } from './rikkes.service';

describe('RikkesService', () => {
  let service: RikkesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RikkesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
