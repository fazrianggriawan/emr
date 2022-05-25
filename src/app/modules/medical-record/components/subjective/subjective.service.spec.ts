import { TestBed } from '@angular/core/testing';

import { SubjectiveService } from './subjective.service';

describe('SubjectiveService', () => {
  let service: SubjectiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubjectiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
