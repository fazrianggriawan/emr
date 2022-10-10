import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCpptComponent } from './form-cppt.component';

describe('FormCpptComponent', () => {
  let component: FormCpptComponent;
  let fixture: ComponentFixture<FormCpptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCpptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCpptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
