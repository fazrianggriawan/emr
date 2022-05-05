import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelRacikanComponent } from './panel-racikan.component';

describe('PanelRacikanComponent', () => {
  let component: PanelRacikanComponent;
  let fixture: ComponentFixture<PanelRacikanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelRacikanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelRacikanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
