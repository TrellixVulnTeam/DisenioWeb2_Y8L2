import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComestiblesComponent } from './comestibles.component';

describe('ComestiblesComponent', () => {
  let component: ComestiblesComponent;
  let fixture: ComponentFixture<ComestiblesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComestiblesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComestiblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
