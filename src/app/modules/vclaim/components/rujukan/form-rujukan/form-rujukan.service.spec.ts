import { TestBed } from '@angular/core/testing';

import { FormRujukanService } from './form-rujukan.service';

describe('FormRujukanService', () => {
  let service: FormRujukanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormRujukanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
