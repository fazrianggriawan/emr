import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JasaPelaksanaComponent } from './jasa-pelaksana.component';

describe('JasaPelaksanaComponent', () => {
  let component: JasaPelaksanaComponent;
  let fixture: ComponentFixture<JasaPelaksanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JasaPelaksanaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JasaPelaksanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
