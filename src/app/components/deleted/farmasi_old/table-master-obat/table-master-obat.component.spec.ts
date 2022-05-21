import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableMasterObatComponent } from './table-master-obat.component';

describe('TableMasterObatComponent', () => {
  let component: TableMasterObatComponent;
  let fixture: ComponentFixture<TableMasterObatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableMasterObatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableMasterObatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
