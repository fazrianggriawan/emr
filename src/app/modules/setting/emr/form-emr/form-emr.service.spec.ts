import { TestBed } from '@angular/core/testing';

import { FormEmrService } from './form-emr.service';

describe('FormEmrService', () => {
  let service: FormEmrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormEmrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
