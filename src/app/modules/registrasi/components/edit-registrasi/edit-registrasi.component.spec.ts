import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRegistrasiComponent } from './edit-registrasi.component';

describe('EditRegistrasiComponent', () => {
  let component: EditRegistrasiComponent;
  let fixture: ComponentFixture<EditRegistrasiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRegistrasiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRegistrasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
