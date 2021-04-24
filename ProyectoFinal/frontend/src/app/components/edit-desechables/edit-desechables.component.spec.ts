import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDesechablesComponent } from './edit-desechables.component';

describe('EditDesechablesComponent', () => {
  let component: EditDesechablesComponent;
  let fixture: ComponentFixture<EditDesechablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDesechablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDesechablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
