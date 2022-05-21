import { TestBed } from '@angular/core/testing';

import { DiagnosaProsedurService } from './diagnosa-prosedur.service';

describe('DiagnosaProsedurService', () => {
  let service: DiagnosaProsedurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiagnosaProsedurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
