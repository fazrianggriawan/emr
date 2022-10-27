import { TestBed } from '@angular/core/testing';

import { RiwayatKunjunganService } from './riwayat-kunjungan.service';

describe('RiwayatKunjunganService', () => {
  let service: RiwayatKunjunganService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RiwayatKunjunganService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
