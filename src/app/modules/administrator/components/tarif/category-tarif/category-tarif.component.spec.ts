import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryTarifComponent } from './category-tarif.component';

describe('CategoryTarifComponent', () => {
  let component: CategoryTarifComponent;
  let fixture: ComponentFixture<CategoryTarifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryTarifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryTarifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
