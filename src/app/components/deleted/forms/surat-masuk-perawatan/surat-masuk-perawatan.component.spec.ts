import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuratMasukPerawatanComponent } from './surat-masuk-perawatan.component';

describe('SuratMasukPerawatanComponent', () => {
  let component: SuratMasukPerawatanComponent;
  let fixture: ComponentFixture<SuratMasukPerawatanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuratMasukPerawatanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuratMasukPerawatanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
