import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPaisComponent } from './edit-pais.component';

describe('EditPaisComponent', () => {
  let component: EditPaisComponent;
  let fixture: ComponentFixture<EditPaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
