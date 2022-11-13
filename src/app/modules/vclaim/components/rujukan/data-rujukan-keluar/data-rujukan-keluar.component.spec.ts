import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRujukanKeluarComponent } from './data-rujukan-keluar.component';

describe('DataRujukanKeluarComponent', () => {
  let component: DataRujukanKeluarComponent;
  let fixture: ComponentFixture<DataRujukanKeluarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataRujukanKeluarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataRujukanKeluarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
