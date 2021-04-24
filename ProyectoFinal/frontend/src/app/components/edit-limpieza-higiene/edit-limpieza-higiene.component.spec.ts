import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLimpiezaHigieneComponent } from './edit-limpieza-higiene.component';

describe('EditLimpiezaHigieneComponent', () => {
  let component: EditLimpiezaHigieneComponent;
  let fixture: ComponentFixture<EditLimpiezaHigieneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditLimpiezaHigieneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLimpiezaHigieneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
