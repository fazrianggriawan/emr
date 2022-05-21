import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatAnatomiComponent } from './pat-anatomi.component';

describe('PatAnatomiComponent', () => {
  let component: PatAnatomiComponent;
  let fixture: ComponentFixture<PatAnatomiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatAnatomiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatAnatomiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
