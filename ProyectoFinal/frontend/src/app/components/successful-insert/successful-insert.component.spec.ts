import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfulInsertComponent } from './successful-insert.component';

describe('SuccessfulInsertComponent', () => {
  let component: SuccessfulInsertComponent;
  let fixture: ComponentFixture<SuccessfulInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessfulInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessfulInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
