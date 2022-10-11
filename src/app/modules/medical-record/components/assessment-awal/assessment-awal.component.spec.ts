import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentAwalComponent } from './assessment-awal.component';

describe('AssessmentAwalComponent', () => {
  let component: AssessmentAwalComponent;
  let fixture: ComponentFixture<AssessmentAwalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssessmentAwalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentAwalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
