import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPasienPulangComponent } from './form-pasien-pulang.component';

describe('FormPasienPulangComponent', () => {
  let component: FormPasienPulangComponent;
  let fixture: ComponentFixture<FormPasienPulangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPasienPulangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPasienPulangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
