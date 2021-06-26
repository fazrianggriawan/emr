import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrasiListComponent } from './registrasi-list.component';

describe('RegistrasiListComponent', () => {
  let component: RegistrasiListComponent;
  let fixture: ComponentFixture<RegistrasiListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrasiListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrasiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
