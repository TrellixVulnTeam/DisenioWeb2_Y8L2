import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntornoRestauranteComponent } from './entorno-restaurante.component';

describe('EntornoRestauranteComponent', () => {
  let component: EntornoRestauranteComponent;
  let fixture: ComponentFixture<EntornoRestauranteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntornoRestauranteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntornoRestauranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
