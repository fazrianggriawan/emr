import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisposisiPasienComponent } from './disposisi-pasien.component';

describe('DisposisiPasienComponent', () => {
  let component: DisposisiPasienComponent;
  let fixture: ComponentFixture<DisposisiPasienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisposisiPasienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisposisiPasienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
