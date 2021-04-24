import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationDeletedComponent } from './information-deleted.component';

describe('InformationDeletedComponent', () => {
  let component: InformationDeletedComponent;
  let fixture: ComponentFixture<InformationDeletedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationDeletedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationDeletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
