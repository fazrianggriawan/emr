import { TestBed } from '@angular/core/testing';

import { TambahPemeriksaanService } from './tambah-pemeriksaan.service';

describe('TambahPemeriksaanService', () => {
  let service: TambahPemeriksaanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TambahPemeriksaanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
