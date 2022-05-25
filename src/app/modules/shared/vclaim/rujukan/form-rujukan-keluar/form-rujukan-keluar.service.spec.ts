import { TestBed } from '@angular/core/testing';

import { FormRujukanKeluarService } from './form-rujukan-keluar.service';

describe('FormRujukanKeluarService', () => {
  let service: FormRujukanKeluarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormRujukanKeluarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
