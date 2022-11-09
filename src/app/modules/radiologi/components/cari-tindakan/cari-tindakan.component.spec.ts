import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CariTindakanComponent } from './cari-tindakan.component';

describe('CariTindakanComponent', () => {
  let component: CariTindakanComponent;
  let fixture: ComponentFixture<CariTindakanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CariTindakanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CariTindakanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
