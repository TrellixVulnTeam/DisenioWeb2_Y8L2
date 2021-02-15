import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesechablesEmpaquesComponent } from './desechables-empaques.component';

describe('DesechablesEmpaquesComponent', () => {
  let component: DesechablesEmpaquesComponent;
  let fixture: ComponentFixture<DesechablesEmpaquesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesechablesEmpaquesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesechablesEmpaquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
