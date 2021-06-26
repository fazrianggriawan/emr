import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RencanBerobatLanjutanFormComponent } from './rencan-berobat-lanjutan-form.component';

describe('RencanBerobatLanjutanFormComponent', () => {
  let component: RencanBerobatLanjutanFormComponent;
  let fixture: ComponentFixture<RencanBerobatLanjutanFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RencanBerobatLanjutanFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RencanBerobatLanjutanFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
