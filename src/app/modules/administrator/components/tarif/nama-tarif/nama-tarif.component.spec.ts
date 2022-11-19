import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NamaTarifComponent } from './nama-tarif.component';

describe('NamaTarifComponent', () => {
  let component: NamaTarifComponent;
  let fixture: ComponentFixture<NamaTarifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NamaTarifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NamaTarifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
