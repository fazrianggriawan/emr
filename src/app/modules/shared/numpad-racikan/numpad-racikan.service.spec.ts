import { TestBed } from '@angular/core/testing';

import { NumpadRacikanService } from './numpad-racikan.service';

describe('NumpadRacikanService', () => {
  let service: NumpadRacikanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumpadRacikanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
