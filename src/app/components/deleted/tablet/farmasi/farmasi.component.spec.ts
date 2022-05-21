import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmasiComponent } from './farmasi.component';

describe('FarmasiComponent', () => {
  let component: FarmasiComponent;
  let fixture: ComponentFixture<FarmasiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmasiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
