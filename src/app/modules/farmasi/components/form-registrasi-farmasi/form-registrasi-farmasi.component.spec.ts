import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRegistrasiFarmasiComponent } from './form-registrasi-farmasi.component';

describe('FormRegistrasiFarmasiComponent', () => {
  let component: FormRegistrasiFarmasiComponent;
  let fixture: ComponentFixture<FormRegistrasiFarmasiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRegistrasiFarmasiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRegistrasiFarmasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
