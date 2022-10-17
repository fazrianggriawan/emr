import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HasilRadiologiComponent } from './hasil-radiologi.component';

describe('HasilRadiologiComponent', () => {
  let component: HasilRadiologiComponent;
  let fixture: ComponentFixture<HasilRadiologiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HasilRadiologiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HasilRadiologiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
