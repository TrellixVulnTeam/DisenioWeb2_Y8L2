import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLimpiezaComponent } from './edit-limpieza.component';

describe('EditLimpiezaComponent', () => {
  let component: EditLimpiezaComponent;
  let fixture: ComponentFixture<EditLimpiezaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditLimpiezaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLimpiezaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
