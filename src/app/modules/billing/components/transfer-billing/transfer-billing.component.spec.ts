import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferBillingComponent } from './transfer-billing.component';

describe('TransferBillingComponent', () => {
  let component: TransferBillingComponent;
  let fixture: ComponentFixture<TransferBillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferBillingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
