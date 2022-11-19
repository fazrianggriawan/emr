import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataPrbComponent } from './data-prb.component';

describe('DataPrbComponent', () => {
  let component: DataPrbComponent;
  let fixture: ComponentFixture<DataPrbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataPrbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataPrbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
