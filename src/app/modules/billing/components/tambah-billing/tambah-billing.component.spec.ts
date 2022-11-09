import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahBillingComponent } from './tambah-billing.component';

describe('TambahBillingComponent', () => {
  let component: TambahBillingComponent;
  let fixture: ComponentFixture<TambahBillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TambahBillingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TambahBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
