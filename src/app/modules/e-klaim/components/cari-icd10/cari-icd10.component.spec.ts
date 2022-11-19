import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CariIcd10Component } from './cari-icd10.component';

describe('CariIcd10Component', () => {
  let component: CariIcd10Component;
  let fixture: ComponentFixture<CariIcd10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CariIcd10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CariIcd10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
