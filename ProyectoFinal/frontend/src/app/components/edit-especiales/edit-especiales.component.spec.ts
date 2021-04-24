import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEspecialesComponent } from './edit-especiales.component';

describe('EditEspecialesComponent', () => {
  let component: EditEspecialesComponent;
  let fixture: ComponentFixture<EditEspecialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEspecialesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEspecialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
