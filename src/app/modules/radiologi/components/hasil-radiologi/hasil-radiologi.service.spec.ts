import { TestBed } from '@angular/core/testing';

import { HasilRadiologiService } from './hasil-radiologi.service';

describe('HasilRadiologiService', () => {
  let service: HasilRadiologiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HasilRadiologiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
