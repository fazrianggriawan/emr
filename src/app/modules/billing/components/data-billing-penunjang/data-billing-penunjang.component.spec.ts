import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBillingPenunjangComponent } from './data-billing-penunjang.component';

describe('DataBillingPenunjangComponent', () => {
  let component: DataBillingPenunjangComponent;
  let fixture: ComponentFixture<DataBillingPenunjangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataBillingPenunjangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBillingPenunjangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
