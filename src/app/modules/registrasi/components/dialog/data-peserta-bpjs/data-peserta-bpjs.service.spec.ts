import { TestBed } from '@angular/core/testing';

import { DataPesertaBpjsService } from './data-peserta-bpjs.service';

describe('DataPesertaBpjsService', () => {
  let service: DataPesertaBpjsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataPesertaBpjsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
