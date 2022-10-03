import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetEstimasiKlaimComponent } from './widget-estimasi-klaim.component';

describe('WidgetEstimasiKlaimComponent', () => {
  let component: WidgetEstimasiKlaimComponent;
  let fixture: ComponentFixture<WidgetEstimasiKlaimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetEstimasiKlaimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetEstimasiKlaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
