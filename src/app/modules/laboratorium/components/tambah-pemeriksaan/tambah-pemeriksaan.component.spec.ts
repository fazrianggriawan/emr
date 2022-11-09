import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahPemeriksaanComponent } from './tambah-pemeriksaan.component';

describe('TambahPemeriksaanComponent', () => {
  let component: TambahPemeriksaanComponent;
  let fixture: ComponentFixture<TambahPemeriksaanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TambahPemeriksaanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TambahPemeriksaanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
