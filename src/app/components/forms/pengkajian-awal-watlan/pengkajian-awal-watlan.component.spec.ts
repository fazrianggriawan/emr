import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PengkajianAwalWatlanComponent } from './pengkajian-awal-watlan.component';

describe('PengkajianAwalWatlanComponent', () => {
  let component: PengkajianAwalWatlanComponent;
  let fixture: ComponentFixture<PengkajianAwalWatlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PengkajianAwalWatlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PengkajianAwalWatlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
