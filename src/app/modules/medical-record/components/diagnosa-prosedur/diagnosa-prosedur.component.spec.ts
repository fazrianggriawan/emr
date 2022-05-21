import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosaProsedurComponent } from './diagnosa-prosedur.component';

describe('DiagnosaProsedurComponent', () => {
  let component: DiagnosaProsedurComponent;
  let fixture: ComponentFixture<DiagnosaProsedurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiagnosaProsedurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosaProsedurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
