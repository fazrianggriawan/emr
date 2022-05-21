import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VclaimComponent } from './vclaim.component';

describe('VclaimComponent', () => {
  let component: VclaimComponent;
  let fixture: ComponentFixture<VclaimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VclaimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VclaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
