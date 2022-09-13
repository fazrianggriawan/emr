import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetRegistrasiComponent } from './widget-registrasi.component';

describe('WidgetRegistrasiComponent', () => {
  let component: WidgetRegistrasiComponent;
  let fixture: ComponentFixture<WidgetRegistrasiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetRegistrasiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetRegistrasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
