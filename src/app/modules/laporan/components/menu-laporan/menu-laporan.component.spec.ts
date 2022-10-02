import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLaporanComponent } from './menu-laporan.component';

describe('MenuLaporanComponent', () => {
  let component: MenuLaporanComponent;
  let fixture: ComponentFixture<MenuLaporanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuLaporanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuLaporanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
