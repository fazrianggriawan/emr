import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectiveNoteComponent } from './objective-note.component';

describe('ObjectiveNoteComponent', () => {
  let component: ObjectiveNoteComponent;
  let fixture: ComponentFixture<ObjectiveNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectiveNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectiveNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
