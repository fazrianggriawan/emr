import { TestBed } from '@angular/core/testing';

import { RuangRekamMedisService } from './ruang-rekam-medis.service';

describe('RuangRekamMedisService', () => {
  let service: RuangRekamMedisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RuangRekamMedisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
