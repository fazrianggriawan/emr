import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRujukanComponent } from './form-rujukan.component';

describe('FormRujukanComponent', () => {
  let component: FormRujukanComponent;
  let fixture: ComponentFixture<FormRujukanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRujukanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRujukanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
