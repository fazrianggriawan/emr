import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PulangSepComponent } from './pulang-sep.component';

describe('PulangSepComponent', () => {
  let component: PulangSepComponent;
  let fixture: ComponentFixture<PulangSepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PulangSepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PulangSepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
