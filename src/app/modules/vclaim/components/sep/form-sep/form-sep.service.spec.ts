import { TestBed } from '@angular/core/testing';

import { FormSepService } from './form-sep.service';

describe('FormSepService', () => {
  let service: FormSepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormSepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
