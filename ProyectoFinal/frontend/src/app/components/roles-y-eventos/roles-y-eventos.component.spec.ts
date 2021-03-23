import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesYEventosComponent } from './roles-y-eventos.component';

describe('RolesYEventosComponent', () => {
  let component: RolesYEventosComponent;
  let fixture: ComponentFixture<RolesYEventosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RolesYEventosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolesYEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
