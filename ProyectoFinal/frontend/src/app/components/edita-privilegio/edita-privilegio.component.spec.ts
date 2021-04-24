import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaPrivilegioComponent } from './edita-privilegio.component';

describe('EditaPrivilegioComponent', () => {
  let component: EditaPrivilegioComponent;
  let fixture: ComponentFixture<EditaPrivilegioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditaPrivilegioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaPrivilegioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
