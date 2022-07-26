import { TestBed } from '@angular/core/testing';

import { SaveStatusService } from './save-status.service';

describe('SaveStatusService', () => {
  let service: SaveStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
