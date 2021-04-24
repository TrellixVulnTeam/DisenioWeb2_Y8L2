import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMesasComponent } from './edit-mesas.component';

describe('EditMesasComponent', () => {
  let component: EditMesasComponent;
  let fixture: ComponentFixture<EditMesasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMesasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMesasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
