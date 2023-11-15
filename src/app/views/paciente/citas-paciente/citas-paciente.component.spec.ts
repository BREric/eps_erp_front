import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitasPacienteComponent } from './citas-paciente.component';

describe('CitasPacienteComponent', () => {
  let component: CitasPacienteComponent;
  let fixture: ComponentFixture<CitasPacienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CitasPacienteComponent]
    });
    fixture = TestBed.createComponent(CitasPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
