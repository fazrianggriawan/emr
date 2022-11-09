import { TestBed } from '@angular/core/testing';

import { CariTindakanService } from './cari-tindakan.service';

describe('CariTindakanService', () => {
  let service: CariTindakanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CariTindakanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
