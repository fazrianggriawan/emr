import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPrbComponent } from './form-prb.component';

describe('FormPrbComponent', () => {
  let component: FormPrbComponent;
  let fixture: ComponentFixture<FormPrbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPrbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPrbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
