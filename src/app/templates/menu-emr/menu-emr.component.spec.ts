import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuEmrComponent } from './menu-emr.component';

describe('MenuEmrComponent', () => {
  let component: MenuEmrComponent;
  let fixture: ComponentFixture<MenuEmrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuEmrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuEmrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
