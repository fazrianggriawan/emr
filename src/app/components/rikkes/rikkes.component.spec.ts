import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RikkesComponent } from './rikkes.component';

describe('RikkesComponent', () => {
  let component: RikkesComponent;
  let fixture: ComponentFixture<RikkesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RikkesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RikkesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
