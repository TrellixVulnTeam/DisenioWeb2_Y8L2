import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRolesYEventosComponent } from './edit-roles-y-eventos.component';

describe('EditRolesYEventosComponent', () => {
  let component: EditRolesYEventosComponent;
  let fixture: ComponentFixture<EditRolesYEventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRolesYEventosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRolesYEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
