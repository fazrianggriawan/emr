import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrologiComponent } from './urologi.component';

describe('UrologiComponent', () => {
  let component: UrologiComponent;
  let fixture: ComponentFixture<UrologiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrologiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrologiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
