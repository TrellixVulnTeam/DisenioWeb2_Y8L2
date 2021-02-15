import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquiposUtensiliosComponent } from './equipos-utensilios.component';

describe('EquiposUtensiliosComponent', () => {
  let component: EquiposUtensiliosComponent;
  let fixture: ComponentFixture<EquiposUtensiliosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquiposUtensiliosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquiposUtensiliosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
