import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSuratKontrolComponent } from './form-surat-kontrol.component';

describe('FormSuratKontrolComponent', () => {
  let component: FormSuratKontrolComponent;
  let fixture: ComponentFixture<FormSuratKontrolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSuratKontrolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSuratKontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
