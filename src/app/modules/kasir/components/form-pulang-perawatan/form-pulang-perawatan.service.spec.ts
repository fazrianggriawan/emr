import { TestBed } from '@angular/core/testing';

import { FormPulangPerawatanService } from './form-pulang-perawatan.service';

describe('FormPulangPerawatanService', () => {
  let service: FormPulangPerawatanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormPulangPerawatanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
