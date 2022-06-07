import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRegistrasiComponent } from './form-registrasi.component';

describe('FormRegistrasiComponent', () => {
  let component: FormRegistrasiComponent;
  let fixture: ComponentFixture<FormRegistrasiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRegistrasiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRegistrasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
