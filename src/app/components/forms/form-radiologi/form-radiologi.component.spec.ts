import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRadiologiComponent } from './form-radiologi.component';

describe('FormRadiologiComponent', () => {
  let component: FormRadiologiComponent;
  let fixture: ComponentFixture<FormRadiologiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRadiologiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRadiologiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
