import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiwayatKunjunganComponent } from './riwayat-kunjungan.component';

describe('RiwayatKunjunganComponent', () => {
  let component: RiwayatKunjunganComponent;
  let fixture: ComponentFixture<RiwayatKunjunganComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiwayatKunjunganComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiwayatKunjunganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
