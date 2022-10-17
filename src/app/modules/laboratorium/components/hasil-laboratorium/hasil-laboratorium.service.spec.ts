import { TestBed } from '@angular/core/testing';

import { HasilLaboratoriumService } from './hasil-laboratorium.service';

describe('HasilLaboratoriumService', () => {
  let service: HasilLaboratoriumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HasilLaboratoriumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
