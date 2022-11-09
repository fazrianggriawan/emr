import { TestBed } from '@angular/core/testing';

import { TambahTindakanService } from './tambah-tindakan.service';

describe('TambahTindakanService', () => {
  let service: TambahTindakanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TambahTindakanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
