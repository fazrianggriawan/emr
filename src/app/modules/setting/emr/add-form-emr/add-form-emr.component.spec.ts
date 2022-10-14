import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFormEmrComponent } from './add-form-emr.component';

describe('AddFormEmrComponent', () => {
  let component: AddFormEmrComponent;
  let fixture: ComponentFixture<AddFormEmrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFormEmrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFormEmrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
