import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CariObatComponent } from './cari-obat.component';

describe('CariObatComponent', () => {
  let component: CariObatComponent;
  let fixture: ComponentFixture<CariObatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CariObatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CariObatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
