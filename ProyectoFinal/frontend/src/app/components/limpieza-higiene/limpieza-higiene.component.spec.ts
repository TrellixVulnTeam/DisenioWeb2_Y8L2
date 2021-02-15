import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LimpiezaHigieneComponent } from './limpieza-higiene.component';

describe('LimpiezaHigieneComponent', () => {
  let component: LimpiezaHigieneComponent;
  let fixture: ComponentFixture<LimpiezaHigieneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LimpiezaHigieneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LimpiezaHigieneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
