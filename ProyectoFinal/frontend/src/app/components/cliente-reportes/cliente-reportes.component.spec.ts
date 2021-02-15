import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteReportesComponent } from './cliente-reportes.component';

describe('ClienteReportesComponent', () => {
  let component: ClienteReportesComponent;
  let fixture: ComponentFixture<ClienteReportesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteReportesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteReportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
