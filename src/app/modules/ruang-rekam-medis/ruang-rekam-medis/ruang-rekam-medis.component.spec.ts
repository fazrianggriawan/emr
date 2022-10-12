import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuangRekamMedisComponent } from './ruang-rekam-medis.component';

describe('RuangRekamMedisComponent', () => {
  let component: RuangRekamMedisComponent;
  let fixture: ComponentFixture<RuangRekamMedisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuangRekamMedisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RuangRekamMedisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
