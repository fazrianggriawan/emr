import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuktiPelayananTindakanComponent } from './bukti-pelayanan-tindakan.component';

describe('BuktiPelayananTindakanComponent', () => {
  let component: BuktiPelayananTindakanComponent;
  let fixture: ComponentFixture<BuktiPelayananTindakanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuktiPelayananTindakanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuktiPelayananTindakanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
