import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataPesertaBpjsComponent } from './data-peserta-bpjs.component';

describe('DataPesertaBpjsComponent', () => {
  let component: DataPesertaBpjsComponent;
  let fixture: ComponentFixture<DataPesertaBpjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataPesertaBpjsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataPesertaBpjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
