import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRujukanKeluarComponent } from './form-rujukan-keluar.component';

describe('FormRujukanKeluarComponent', () => {
  let component: FormRujukanKeluarComponent;
  let fixture: ComponentFixture<FormRujukanKeluarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRujukanKeluarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRujukanKeluarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
