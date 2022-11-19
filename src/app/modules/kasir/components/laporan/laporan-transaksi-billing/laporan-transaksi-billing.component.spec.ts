import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaporanTransaksiBillingComponent } from './laporan-transaksi-billing.component';

describe('LaporanTransaksiBillingComponent', () => {
  let component: LaporanTransaksiBillingComponent;
  let fixture: ComponentFixture<LaporanTransaksiBillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaporanTransaksiBillingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaporanTransaksiBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
