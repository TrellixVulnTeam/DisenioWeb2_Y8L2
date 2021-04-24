import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationUpdatedComponent } from './information-updated.component';

describe('InformationUpdatedComponent', () => {
  let component: InformationUpdatedComponent;
  let fixture: ComponentFixture<InformationUpdatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationUpdatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationUpdatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
