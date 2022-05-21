import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormObatComponent } from './form-obat.component';

describe('FormObatComponent', () => {
  let component: FormObatComponent;
  let fixture: ComponentFixture<FormObatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormObatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormObatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
