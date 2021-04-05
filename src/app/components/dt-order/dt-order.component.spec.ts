import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DtOrderComponent } from './dt-order.component';

describe('DtOrderComponent', () => {
  let component: DtOrderComponent;
  let fixture: ComponentFixture<DtOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DtOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DtOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
