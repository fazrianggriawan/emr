import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderRegistrasiComponent } from './header-registrasi.component';

describe('HeaderRegistrasiComponent', () => {
  let component: HeaderRegistrasiComponent;
  let fixture: ComponentFixture<HeaderRegistrasiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderRegistrasiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderRegistrasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
