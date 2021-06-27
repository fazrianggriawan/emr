import { TestBed } from '@angular/core/testing';

import { IcdService } from './icd.service';

describe('Icd10Service', () => {
  let service: IcdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IcdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
