import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumpadRacikanComponent } from './numpad-racikan.component';

describe('NumpadRacikanComponent', () => {
  let component: NumpadRacikanComponent;
  let fixture: ComponentFixture<NumpadRacikanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumpadRacikanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumpadRacikanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
