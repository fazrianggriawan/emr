import { TestBed } from '@angular/core/testing';

import { CpptService } from './cppt.service';

describe('CpptService', () => {
  let service: CpptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CpptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
