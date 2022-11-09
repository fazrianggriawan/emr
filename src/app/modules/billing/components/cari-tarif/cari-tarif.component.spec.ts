import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CariTarifComponent } from './cari-tarif.component';

describe('CariTarifComponent', () => {
  let component: CariTarifComponent;
  let fixture: ComponentFixture<CariTarifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CariTarifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CariTarifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
