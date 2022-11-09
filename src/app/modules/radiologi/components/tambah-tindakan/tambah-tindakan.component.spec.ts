import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahTindakanComponent } from './tambah-tindakan.component';

describe('TambahTindakanComponent', () => {
  let component: TambahTindakanComponent;
  let fixture: ComponentFixture<TambahTindakanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TambahTindakanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TambahTindakanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
