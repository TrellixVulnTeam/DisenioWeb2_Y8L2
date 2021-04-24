import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditComestiblesComponent } from './edit-comestibles.component';

describe('EditComestiblesComponent', () => {
  let component: EditComestiblesComponent;
  let fixture: ComponentFixture<EditComestiblesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditComestiblesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditComestiblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
