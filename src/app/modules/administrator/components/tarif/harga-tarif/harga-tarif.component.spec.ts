import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HargaTarifComponent } from './harga-tarif.component';

describe('HargaTarifComponent', () => {
  let component: HargaTarifComponent;
  let fixture: ComponentFixture<HargaTarifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HargaTarifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HargaTarifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
