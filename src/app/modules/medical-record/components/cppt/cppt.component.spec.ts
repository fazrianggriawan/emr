import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpptComponent } from './cppt.component';

describe('CpptComponent', () => {
  let component: CpptComponent;
  let fixture: ComponentFixture<CpptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CpptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
