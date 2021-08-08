import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalResumeComponent } from './medical-resume.component';

describe('MedicalResumeComponent', () => {
  let component: MedicalResumeComponent;
  let fixture: ComponentFixture<MedicalResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalResumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
