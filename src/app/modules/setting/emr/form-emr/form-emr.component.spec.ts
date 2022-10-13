import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEmrComponent } from './form-emr.component';

describe('FormEmrComponent', () => {
  let component: FormEmrComponent;
  let fixture: ComponentFixture<FormEmrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEmrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEmrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
