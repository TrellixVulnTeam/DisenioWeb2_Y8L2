import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCajasComponent } from './edit-cajas.component';

describe('EditCajasComponent', () => {
  let component: EditCajasComponent;
  let fixture: ComponentFixture<EditCajasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCajasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCajasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
