import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRawatInapComponent } from './form-rawat-inap.component';

describe('FormRawatInapComponent', () => {
  let component: FormRawatInapComponent;
  let fixture: ComponentFixture<FormRawatInapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRawatInapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRawatInapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
