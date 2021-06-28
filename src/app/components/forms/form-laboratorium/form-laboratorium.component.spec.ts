import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLaboratoriumComponent } from './form-laboratorium.component';

describe('FormLaboratoriumComponent', () => {
  let component: FormLaboratoriumComponent;
  let fixture: ComponentFixture<FormLaboratoriumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormLaboratoriumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormLaboratoriumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
