import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HasilUsgUrologiComponent } from './hasil-usg-urologi.component';

describe('HasilUsgUrologiComponent', () => {
  let component: HasilUsgUrologiComponent;
  let fixture: ComponentFixture<HasilUsgUrologiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HasilUsgUrologiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HasilUsgUrologiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
