import { TestBed } from '@angular/core/testing';

import { AssessmentUmumService } from './assessment-umum.service';

describe('AssessmentUmumService', () => {
  let service: AssessmentUmumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssessmentUmumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
