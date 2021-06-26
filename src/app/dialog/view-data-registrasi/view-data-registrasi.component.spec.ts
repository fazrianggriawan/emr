import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDataRegistrasiComponent } from './view-data-registrasi.component';

describe('ViewDataRegistrasiComponent', () => {
  let component: ViewDataRegistrasiComponent;
  let fixture: ComponentFixture<ViewDataRegistrasiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDataRegistrasiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDataRegistrasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
