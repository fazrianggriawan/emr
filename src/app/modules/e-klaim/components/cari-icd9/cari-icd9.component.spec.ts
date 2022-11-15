import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CariIcd9Component } from './cari-icd9.component';

describe('CariIcd9Component', () => {
  let component: CariIcd9Component;
  let fixture: ComponentFixture<CariIcd9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CariIcd9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CariIcd9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
