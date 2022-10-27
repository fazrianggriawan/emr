import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StokOpnameComponent } from './stok-opname.component';

describe('StokOpnameComponent', () => {
  let component: StokOpnameComponent;
  let fixture: ComponentFixture<StokOpnameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StokOpnameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StokOpnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
