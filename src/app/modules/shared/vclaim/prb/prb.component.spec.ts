import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrbComponent } from './prb.component';

describe('PrbComponent', () => {
  let component: PrbComponent;
  let fixture: ComponentFixture<PrbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
