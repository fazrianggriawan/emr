import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PengajuanPembedahaanComponent } from './pengajuan-pembedahaan.component';

describe('PengajuanPembedahaanComponent', () => {
  let component: PengajuanPembedahaanComponent;
  let fixture: ComponentFixture<PengajuanPembedahaanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PengajuanPembedahaanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PengajuanPembedahaanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
