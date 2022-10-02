import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CariPasienComponent } from './cari-pasien.component';

describe('CariPasienComponent', () => {
  let component: CariPasienComponent;
  let fixture: ComponentFixture<CariPasienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CariPasienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CariPasienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
