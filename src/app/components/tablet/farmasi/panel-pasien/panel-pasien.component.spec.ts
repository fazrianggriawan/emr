import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelPasienComponent } from './panel-pasien.component';

describe('PanelPasienComponent', () => {
  let component: PanelPasienComponent;
  let fixture: ComponentFixture<PanelPasienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelPasienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelPasienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
