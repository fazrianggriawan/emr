import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryReviewComponent } from './summary-review.component';

describe('SummaryReviewComponent', () => {
  let component: SummaryReviewComponent;
  let fixture: ComponentFixture<SummaryReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummaryReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
