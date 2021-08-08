import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentUmumComponent } from './assessment-umum.component';

describe('AssessmentUmumComponent', () => {
  let component: AssessmentUmumComponent;
  let fixture: ComponentFixture<AssessmentUmumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssessmentUmumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentUmumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
