import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDesechablesEmpaquesComponent } from './edit-desechables-empaques.component';

describe('EditDesechablesEmpaquesComponent', () => {
  let component: EditDesechablesEmpaquesComponent;
  let fixture: ComponentFixture<EditDesechablesEmpaquesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDesechablesEmpaquesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDesechablesEmpaquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
