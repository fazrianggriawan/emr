import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSepComponent } from './form-sep.component';

describe('FormSepComponent', () => {
  let component: FormSepComponent;
  let fixture: ComponentFixture<FormSepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
