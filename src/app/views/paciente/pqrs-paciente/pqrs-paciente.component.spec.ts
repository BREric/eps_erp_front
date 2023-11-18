import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PqrsPacienteComponent } from './pqrs-paciente.component';

describe('PqrsPacienteComponent', () => {
  let component: PqrsPacienteComponent;
  let fixture: ComponentFixture<PqrsPacienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PqrsPacienteComponent]
    });
    fixture = TestBed.createComponent(PqrsPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
