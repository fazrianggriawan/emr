import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBillingComponent } from './data-billing.component';

describe('DataBillingComponent', () => {
  let component: DataBillingComponent;
  let fixture: ComponentFixture<DataBillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataBillingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
