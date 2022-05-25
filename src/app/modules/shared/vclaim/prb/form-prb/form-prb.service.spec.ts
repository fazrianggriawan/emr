import { TestBed } from '@angular/core/testing';

import { FormPrbService } from './form-prb.service';

describe('FormPrbService', () => {
  let service: FormPrbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormPrbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
