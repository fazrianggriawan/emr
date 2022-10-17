import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CariRegistrasiComponent } from './cari-registrasi.component';

describe('CariRegistrasiComponent', () => {
  let component: CariRegistrasiComponent;
  let fixture: ComponentFixture<CariRegistrasiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CariRegistrasiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CariRegistrasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
