import { TestBed } from '@angular/core/testing';

import { DtLastestOrderService } from './dt-lastest-order.service';

describe('DtLastestOrderService', () => {
  let service: DtLastestOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DtLastestOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
