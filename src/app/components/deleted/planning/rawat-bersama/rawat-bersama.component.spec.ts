import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RawatBersamaComponent } from './rawat-bersama.component';

describe('RawatBersamaComponent', () => {
  let component: RawatBersamaComponent;
  let fixture: ComponentFixture<RawatBersamaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RawatBersamaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RawatBersamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
