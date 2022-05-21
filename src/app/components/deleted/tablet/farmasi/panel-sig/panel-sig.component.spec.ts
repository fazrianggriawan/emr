import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelSigComponent } from './panel-sig.component';

describe('PanelSigComponent', () => {
  let component: PanelSigComponent;
  let fixture: ComponentFixture<PanelSigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelSigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelSigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
