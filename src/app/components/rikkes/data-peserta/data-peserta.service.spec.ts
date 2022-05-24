import { TestBed } from '@angular/core/testing';

import { DataPesertaService } from './data-peserta.service';

describe('DataPesertaService', () => {
  let service: DataPesertaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataPesertaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
