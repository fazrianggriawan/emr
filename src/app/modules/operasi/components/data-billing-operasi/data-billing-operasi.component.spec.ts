import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBillingOperasiComponent } from './data-billing-operasi.component';

describe('DataBillingOperasiComponent', () => {
  let component: DataBillingOperasiComponent;
  let fixture: ComponentFixture<DataBillingOperasiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataBillingOperasiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBillingOperasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
