import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HitungTarifComponent } from './hitung-tarif.component';

describe('HitungTarifComponent', () => {
  let component: HitungTarifComponent;
  let fixture: ComponentFixture<HitungTarifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HitungTarifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HitungTarifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
