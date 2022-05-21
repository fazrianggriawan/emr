import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EResepComponent } from './e-resep.component';

describe('EResepComponent', () => {
  let component: EResepComponent;
  let fixture: ComponentFixture<EResepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EResepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EResepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
