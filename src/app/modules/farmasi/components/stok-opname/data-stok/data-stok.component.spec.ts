import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataStokComponent } from './data-stok.component';

describe('DataStokComponent', () => {
  let component: DataStokComponent;
  let fixture: ComponentFixture<DataStokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataStokComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataStokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
