import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpptFormComponent } from './cppt-form.component';

describe('CpptFormComponent', () => {
  let component: CpptFormComponent;
  let fixture: ComponentFixture<CpptFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpptFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CpptFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
