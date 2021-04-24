import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationInsertedComponent } from './information-inserted.component';

describe('InformationInsertedComponent', () => {
  let component: InformationInsertedComponent;
  let fixture: ComponentFixture<InformationInsertedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationInsertedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationInsertedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
