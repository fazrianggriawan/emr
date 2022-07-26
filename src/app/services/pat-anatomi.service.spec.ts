import { TestBed } from '@angular/core/testing';

import { PatAnatomiService } from './pat-anatomi.service';

describe('PatAnatomiService', () => {
  let service: PatAnatomiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatAnatomiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
