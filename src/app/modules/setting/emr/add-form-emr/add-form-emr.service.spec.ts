import { TestBed } from '@angular/core/testing';

import { AddFormEmrService } from './add-form-emr.service';

describe('AddFormEmrService', () => {
  let service: AddFormEmrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddFormEmrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
