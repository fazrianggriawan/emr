import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RawatJalanComponent } from './rawat-jalan.component';

describe('RawatJalanComponent', () => {
  let component: RawatJalanComponent;
  let fixture: ComponentFixture<RawatJalanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RawatJalanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RawatJalanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
