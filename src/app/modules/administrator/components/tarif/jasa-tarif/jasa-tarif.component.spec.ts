import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JasaTarifComponent } from './jasa-tarif.component';

describe('JasaTarifComponent', () => {
  let component: JasaTarifComponent;
  let fixture: ComponentFixture<JasaTarifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JasaTarifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JasaTarifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
