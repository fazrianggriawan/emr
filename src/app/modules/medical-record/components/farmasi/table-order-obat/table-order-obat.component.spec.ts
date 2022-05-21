import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableOrderObatComponent } from './table-order-obat.component';

describe('TableOrderObatComponent', () => {
  let component: TableOrderObatComponent;
  let fixture: ComponentFixture<TableOrderObatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableOrderObatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableOrderObatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
