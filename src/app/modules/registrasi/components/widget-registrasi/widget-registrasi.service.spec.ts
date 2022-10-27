import { TestBed } from '@angular/core/testing';

import { WidgetRegistrasiService } from './widget-registrasi.service';

describe('WidgetRegistrasiService', () => {
  let service: WidgetRegistrasiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WidgetRegistrasiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
