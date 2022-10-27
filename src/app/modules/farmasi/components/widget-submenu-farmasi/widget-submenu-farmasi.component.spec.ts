import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetSubmenuFarmasiComponent } from './widget-submenu-farmasi.component';

describe('WidgetSubmenuFarmasiComponent', () => {
  let component: WidgetSubmenuFarmasiComponent;
  let fixture: ComponentFixture<WidgetSubmenuFarmasiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetSubmenuFarmasiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetSubmenuFarmasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
