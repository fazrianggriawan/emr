import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EKlaimComponent } from './e-klaim.component';

describe('EKlaimComponent', () => {
  let component: EKlaimComponent;
  let fixture: ComponentFixture<EKlaimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EKlaimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EKlaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
