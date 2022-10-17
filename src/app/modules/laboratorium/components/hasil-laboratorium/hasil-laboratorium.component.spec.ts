import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HasilLaboratoriumComponent } from './hasil-laboratorium.component';

describe('HasilLaboratoriumComponent', () => {
  let component: HasilLaboratoriumComponent;
  let fixture: ComponentFixture<HasilLaboratoriumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HasilLaboratoriumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HasilLaboratoriumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
