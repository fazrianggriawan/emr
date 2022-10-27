import { TestBed } from '@angular/core/testing';

import { WidgetSubmenuFarmasiService } from './widget-submenu-farmasi.service';

describe('WidgetSubmenuFarmasiService', () => {
  let service: WidgetSubmenuFarmasiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WidgetSubmenuFarmasiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
