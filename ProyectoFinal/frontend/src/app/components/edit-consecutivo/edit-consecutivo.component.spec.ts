import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditConsecutivoComponent } from './edit-consecutivo.component';

describe('EditConsecutivoComponent', () => {
  let component: EditConsecutivoComponent;
  let fixture: ComponentFixture<EditConsecutivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditConsecutivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditConsecutivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
