import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuratKontrolComponent } from './surat-kontrol.component';

describe('SuratKontrolComponent', () => {
  let component: SuratKontrolComponent;
  let fixture: ComponentFixture<SuratKontrolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuratKontrolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuratKontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
