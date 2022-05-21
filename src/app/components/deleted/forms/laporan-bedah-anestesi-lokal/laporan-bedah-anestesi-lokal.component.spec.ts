import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaporanBedahAnestesiLokalComponent } from './laporan-bedah-anestesi-lokal.component';

describe('LaporanBedahAnestesiLokalComponent', () => {
  let component: LaporanBedahAnestesiLokalComponent;
  let fixture: ComponentFixture<LaporanBedahAnestesiLokalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaporanBedahAnestesiLokalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaporanBedahAnestesiLokalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
