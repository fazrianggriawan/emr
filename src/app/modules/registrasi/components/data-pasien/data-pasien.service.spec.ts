import { TestBed } from '@angular/core/testing';

import { DataPasienService } from './data-pasien.service';

describe('DataPasienService', () => {
  let service: DataPasienService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataPasienService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
