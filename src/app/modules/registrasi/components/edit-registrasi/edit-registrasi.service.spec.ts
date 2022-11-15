import { TestBed } from '@angular/core/testing';

import { EditRegistrasiService } from './edit-registrasi.service';

describe('EditRegistrasiService', () => {
  let service: EditRegistrasiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditRegistrasiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
