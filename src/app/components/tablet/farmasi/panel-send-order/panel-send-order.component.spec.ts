import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelSendOrderComponent } from './panel-send-order.component';

describe('PanelSendOrderComponent', () => {
  let component: PanelSendOrderComponent;
  let fixture: ComponentFixture<PanelSendOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelSendOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelSendOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
