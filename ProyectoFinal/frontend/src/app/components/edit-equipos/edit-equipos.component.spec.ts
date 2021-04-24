import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEquiposComponent } from './edit-equipos.component';

describe('EditEquiposComponent', () => {
  let component: EditEquiposComponent;
  let fixture: ComponentFixture<EditEquiposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEquiposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEquiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
