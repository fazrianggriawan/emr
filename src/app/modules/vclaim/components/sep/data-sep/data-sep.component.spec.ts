import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSepComponent } from './data-sep.component';

describe('DataSepComponent', () => {
  let component: DataSepComponent;
  let fixture: ComponentFixture<DataSepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataSepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataSepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
