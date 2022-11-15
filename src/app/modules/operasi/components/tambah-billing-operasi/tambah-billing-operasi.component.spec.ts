import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahBillingOperasiComponent } from './tambah-billing-operasi.component';

describe('TambahBillingOperasiComponent', () => {
  let component: TambahBillingOperasiComponent;
  let fixture: ComponentFixture<TambahBillingOperasiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TambahBillingOperasiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TambahBillingOperasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
