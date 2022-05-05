import { TestBed } from '@angular/core/testing';

import { TabletFarmasiService } from './tablet-farmasi.service';

describe('TabletFarmasiService', () => {
  let service: TabletFarmasiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabletFarmasiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
