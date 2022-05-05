import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelJumlahComponent } from './panel-jumlah.component';

describe('PanelJumlahComponent', () => {
  let component: PanelJumlahComponent;
  let fixture: ComponentFixture<PanelJumlahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelJumlahComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelJumlahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
