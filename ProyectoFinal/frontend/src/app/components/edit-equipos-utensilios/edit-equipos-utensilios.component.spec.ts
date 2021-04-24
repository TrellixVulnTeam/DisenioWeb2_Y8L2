import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEquiposUtensiliosComponent } from './edit-equipos-utensilios.component';

describe('EditEquiposUtensiliosComponent', () => {
  let component: EditEquiposUtensiliosComponent;
  let fixture: ComponentFixture<EditEquiposUtensiliosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEquiposUtensiliosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEquiposUtensiliosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
