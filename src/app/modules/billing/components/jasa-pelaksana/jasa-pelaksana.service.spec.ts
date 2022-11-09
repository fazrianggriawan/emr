import { TestBed } from '@angular/core/testing';

import { JasaPelaksanaService } from './jasa-pelaksana.service';

describe('JasaPelaksanaService', () => {
  let service: JasaPelaksanaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JasaPelaksanaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
