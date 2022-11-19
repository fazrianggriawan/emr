import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPulangPerawatanComponent } from './form-pulang-perawatan.component';

describe('FormPulangPerawatanComponent', () => {
  let component: FormPulangPerawatanComponent;
  let fixture: ComponentFixture<FormPulangPerawatanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPulangPerawatanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPulangPerawatanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
