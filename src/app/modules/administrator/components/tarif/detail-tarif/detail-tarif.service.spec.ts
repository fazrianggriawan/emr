import { TestBed } from '@angular/core/testing';

import { DetailTarifService } from './detail-tarif.service';

describe('DetailTarifService', () => {
  let service: DetailTarifService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailTarifService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
