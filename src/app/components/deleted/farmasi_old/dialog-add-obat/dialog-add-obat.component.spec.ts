import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddObatComponent } from './dialog-add-obat.component';

describe('DialogAddObatComponent', () => {
  let component: DialogAddObatComponent;
  let fixture: ComponentFixture<DialogAddObatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddObatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddObatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
