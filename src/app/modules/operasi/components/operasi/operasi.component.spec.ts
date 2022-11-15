import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperasiComponent } from './operasi.component';

describe('OperasiComponent', () => {
  let component: OperasiComponent;
  let fixture: ComponentFixture<OperasiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperasiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
