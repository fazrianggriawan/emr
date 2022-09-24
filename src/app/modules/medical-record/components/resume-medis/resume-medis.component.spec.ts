import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeMedisComponent } from './resume-medis.component';

describe('ResumeMedisComponent', () => {
  let component: ResumeMedisComponent;
  let fixture: ComponentFixture<ResumeMedisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeMedisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeMedisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
