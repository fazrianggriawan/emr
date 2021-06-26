import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaporanPemantauanTindakanAnestLokalComponent } from './laporan-pemantauan-tindakan-anest-lokal.component';

describe('LaporanPemantauanTindakanAnestLokalComponent', () => {
  let component: LaporanPemantauanTindakanAnestLokalComponent;
  let fixture: ComponentFixture<LaporanPemantauanTindakanAnestLokalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaporanPemantauanTindakanAnestLokalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaporanPemantauanTindakanAnestLokalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
